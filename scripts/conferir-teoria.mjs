// Confere os exemplos de código das lições de teoria (src/data/teoria/)
// e os códigos do "Código do dia" (src/data/codigosDoDia.js).
// Roda cada código no Pyodide e compara com a "saida" escrita no arquivo.
// Nos exemplos das lições marcados com erro: true, compara com a última linha da mensagem de erro.
//
// Uso: npm run teoria
import { loadPyodide } from 'pyodide'
import { codigosDoDia } from '../src/data/codigosDoDia.js'
import { licoes } from '../src/data/teoria/index.js'
import { normalizarSaida } from '../src/python/comparar.js'
import { criarExecutor } from '../src/python/harness.js'

console.log('Carregando o Python (Pyodide)...')
const executar = criarExecutor(await loadPyodide())

let problemas = 0
for (const licao of licoes) {
  const exemplos = licao.blocos.filter((bloco) => bloco.tipo === 'codigo')
  let ok = 0
  exemplos.forEach((bloco, i) => {
    const entrada = (bloco.entrada ?? []).map((linha) => linha + '\n').join('')
    const { saida, erro } = executar(bloco.codigo, entrada)
    const obtida = bloco.erro ? (erro ?? '(não deu erro)').trim().split('\n').at(-1) : saida
    const certo = bloco.erro ? Boolean(erro) && obtida === bloco.saida : !erro && normalizarSaida(saida) === normalizarSaida(bloco.saida)
    if (certo) {
      ok++
      return
    }
    problemas++
    console.log(`\n✗ ${licao.id}, exemplo ${i + 1}:\n${bloco.codigo}`)
    console.log('  escrito na lição:', JSON.stringify(bloco.saida))
    console.log('  Python mostrou:  ', JSON.stringify(obtida))
    if (erro && !bloco.erro) console.log(erro)
  })
  console.log(`${ok === exemplos.length ? '✓' : '✗'} ${licao.id}: ${ok}/${exemplos.length} exemplos corretos`)
}

// Código do dia: a saída certa precisa bater, e as duas erradas precisam ser diferentes dela.
let codigosOk = 0
codigosDoDia.forEach((item, i) => {
  const codigo = item.linhas.map(([linha]) => linha).join('\n')
  const { saida, erro } = executar(codigo, '')
  const falhas = []
  if (erro) falhas.push('deu erro:\n' + erro)
  else if (normalizarSaida(saida) !== normalizarSaida(item.saida)) {
    falhas.push(`saída escrita ${JSON.stringify(item.saida)}, mas o Python mostrou ${JSON.stringify(saida.trimEnd())}`)
  }
  if (item.erradas.length !== 2) falhas.push('precisa ter exatamente 2 respostas erradas')
  if (item.erradas.some((errada) => normalizarSaida(errada) === normalizarSaida(item.saida))) falhas.push('uma resposta "errada" é igual à certa')
  if (new Set(item.erradas).size !== item.erradas.length) falhas.push('as respostas erradas são repetidas')
  if (falhas.length) {
    problemas++
    console.log(`\n✗ Código do dia ${i + 1} (${item.titulo}):\n${codigo}\n  ${falhas.join('\n  ')}`)
  } else codigosOk++
})
console.log(`${codigosOk === codigosDoDia.length ? '✓' : '✗'} código do dia: ${codigosOk}/${codigosDoDia.length} corretos`)

if (problemas) {
  console.log(`\n${problemas} exemplo(s) com a saída errada.`)
  process.exit(1)
}
console.log('\nTodos os exemplos estão corretos!')
