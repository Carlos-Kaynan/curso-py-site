// Código Python que "embrulha" a execução do código do aluno.
// Ele é usado em dois lugares:
//   - no navegador (python.worker.js), quando o aluno clica em Executar/Enviar;
//   - no Node (scripts/gerar-questoes.mjs), para gerar as saídas esperadas.
//
// O que ele faz:
//   1. troca o input() por uma versão que lê as linhas da "entrada" do caso de teste
//      (e ignora a mensagem, então input("Digite:") também funciona);
//   2. guarda tudo o que o print() escreve, em vez de mostrar no console;
//   3. se der erro, devolve a mensagem de erro do Python (o "traceback").
export const CODIGO_HARNESS = String.raw`
import io
import json
import linecache
import sys
import traceback

ARQUIVO = "<seu código>"
LIMITE_SAIDA = 200_000  # caracteres


class SaidaLimitada(io.StringIO):
    def write(self, texto):
        if self.tell() > LIMITE_SAIDA:
            raise RuntimeError("seu programa escreveu texto demais (será que tem um print dentro de um laço infinito?)")
        return super().write(texto)


def rodar_codigo_do_aluno(codigo, entrada):
    saida = SaidaLimitada()
    leitor = io.StringIO(entrada)

    def input_do_aluno(mensagem=""):
        linha = leitor.readline()
        if linha == "":
            raise EOFError("o programa chamou input() mais vezes do que existem linhas na entrada")
        return linha.rstrip("\r\n")

    # Permite que o traceback mostre a linha do código do aluno onde o erro aconteceu.
    linecache.cache[ARQUIVO] = (len(codigo), None, codigo.splitlines(True), ARQUIVO)

    stdout_original, stdin_original = sys.stdout, sys.stdin
    sys.stdout, sys.stdin = saida, leitor
    erro = None
    try:
        programa = compile(codigo, ARQUIVO, "exec")
        exec(programa, {"__name__": "__main__", "input": input_do_aluno})
    except SystemExit:
        pass
    except BaseException as e:
        # Esconde as linhas do próprio harness e mostra só as do código do aluno.
        tb = e.__traceback__
        while tb is not None and tb.tb_frame.f_code.co_filename != ARQUIVO:
            tb = tb.tb_next
        erro = "".join(traceback.format_exception(type(e), e, tb))
    finally:
        sys.stdout, sys.stdin = stdout_original, stdin_original

    return json.dumps({"saida": saida.getvalue(), "erro": erro})
`

// Prepara um Pyodide já carregado e devolve uma função que executa código Python.
export function criarExecutor(pyodide) {
  pyodide.runPython(CODIGO_HARNESS)
  const rodar = pyodide.globals.get('rodar_codigo_do_aluno')
  return (codigo, entrada) => JSON.parse(rodar(codigo, entrada))
}
