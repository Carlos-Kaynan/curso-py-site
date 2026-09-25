// Confere os exemplos de código das lições de teoria (src/data/teoria/).
// Roda cada código no Pyodide e compara com a "saida" escrita na lição.
// Nos exemplos marcados com erro: true, compara com a última linha da mensagem de erro.
//
// Uso: npm run teoria
import { loadPyodide } from 'pyodide'
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

if (problemas) {
  console.log(`\n${problemas} exemplo(s) com a saída errada.`)
  process.exit(1)
}
console.log('\nTodos os exemplos estão corretos!')
