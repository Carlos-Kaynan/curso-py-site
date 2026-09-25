# Curso_Py

Site de exercícios de Python com correção automática. O aluno escolhe um assunto, lê o enunciado, escreve o código no navegador e clica em **Enviar** para saber se acertou.

As questões vêm do repositório [Curso_Py](https://github.com/Carlos-Kaynan/Curso_Py) (módulos 01 a 06).

## Como funciona

- O Python roda **dentro do navegador** com o [Pyodide](https://pyodide.org) (Python compilado para WebAssembly). Não precisa de servidor.
- **Executar** roda o código com a entrada digitada no console.
- **Enviar** roda o código em todos os casos de teste (exemplos + ocultos) e compara a saída com a esperada.
- O progresso (questões resolvidas e o código de cada uma) fica salvo no navegador (`localStorage`).

## Comandos

```powershell
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run questoes   # gera src/data/questoes.json a partir da pasta questoes/
npm run build      # gera o site pronto em dist/
npm run preview    # serve o dist/ localmente
npm run lint       # procura erros no código
```

## Como adicionar ou editar uma questão

1. Edite (ou crie) o arquivo do módulo em `questoes/`: enunciado, exemplos, testes e a solução.
2. Rode `npm run questoes`. O script roda a solução em cada teste e salva as saídas esperadas em `src/data/questoes.json`.
3. Nunca edite o `questoes.json` à mão: ele é gerado.

## Estrutura

```
questoes/            fonte das questões (com as soluções, que NÃO vão para o site)
scripts/             script que gera o gabarito
src/data/            questoes.json (gerado) e funções para buscar assuntos/questões
src/python/          harness Python, Web Worker do Pyodide, executor e comparação de saídas
src/pages/           Início, Assunto (lista de questões) e Questão (tela de resolver)
src/components/      Enunciado, selo de dificuldade e ícone de status
```
