// Gera src/data/questoes.json a partir dos arquivos da pasta questoes/.
//
// Para cada caso de teste, este script roda a SOLUÇÃO da questão no Pyodide
// (o mesmo Python que roda no navegador) e guarda a saída como "saída esperada".
// A solução em si não é copiada para o JSON, então não vai para o site.
//
// Uso: npm run questoes
import { mkdir, writeFile } from 'node:fs/promises'
import { loadPyodide } from 'pyodide'
import assuntos from '../questoes/index.js'
import { criarExecutor } from '../src/python/harness.js'

const ARQUIVO_SAIDA = new URL('../src/data/questoes.json', import.meta.url)
const PESOS = { facil: 1, medio: 2, dificil: 3 }
const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Cada linha termina com Enter, como se alguém tivesse digitado no teclado.
const montarEntrada = (linhas) => linhas.map((linha) => linha + '\n').join('')

console.log('Carregando o Python (Pyodide)...')
const executar = criarExecutor(await loadPyodide())

const idsAssuntos = new Set()
const resultado = assuntos.map((assunto, indiceAssunto) => {
  if (idsAssuntos.has(assunto.id)) throw new Error(`Assunto repetido: ${assunto.id}`)
  idsAssuntos.add(assunto.id)
  const idsQuestoes = new Set()

  const questoes = assunto.questoes.map((questao, indiceQuestao) => {
    const nome = `${assunto.id}/${questao.id}`
    if (idsQuestoes.has(questao.id)) throw new Error(`Questão repetida: ${nome}`)
    idsQuestoes.add(questao.id)
    if (!PESOS[questao.dificuldade]) throw new Error(`${nome}: dificuldade inválida "${questao.dificuldade}"`)

    const gerarCasos = (listaDeEntradas) =>
      listaDeEntradas.map((linhas) => {
        const entrada = montarEntrada(linhas)
        const { saida, erro } = executar(questao.solucao.trim() + '\n', entrada)
        if (erro) throw new Error(`${nome}: a solução deu erro com a entrada ${JSON.stringify(linhas)}\n${erro}`)
        return { entrada, saida }
      })

    const exemplos = gerarCasos(questao.exemplos)
    const testes = gerarCasos(questao.testes ?? [])
    console.log(`  ${nome}: ${exemplos.length} exemplo(s), ${testes.length} teste(s) oculto(s)`)

    return {
      id: questao.id,
      letra: LETRAS[indiceQuestao],
      titulo: questao.titulo,
      dificuldade: questao.dificuldade,
      peso: PESOS[questao.dificuldade],
      enunciado: questao.enunciado,
      entrada: questao.entrada,
      saida: questao.saida,
      observacoes: questao.observacoes ?? [],
      exemplos,
      testes,
    }
  })

  return {
    id: assunto.id,
    numero: indiceAssunto + 1,
    titulo: assunto.titulo,
    descricao: assunto.descricao,
    questoes,
  }
})

await mkdir(new URL('.', ARQUIVO_SAIDA), { recursive: true })
await writeFile(ARQUIVO_SAIDA, JSON.stringify({ assuntos: resultado }, null, 2) + '\n', 'utf8')
const total = resultado.reduce((soma, a) => soma + a.questoes.length, 0)
console.log(`\nPronto! ${resultado.length} assuntos e ${total} questões salvos em src/data/questoes.json`)
