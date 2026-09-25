// Este arquivo roda num Web Worker: uma "thread" separada da página.
// Assim, mesmo que o código do aluno tenha um laço infinito, a página não trava
// (o executor.js simplesmente descarta este worker e cria outro).
import { criarExecutor } from './harness.js'

// Mantenha esta versão igual à do pacote "pyodide" no package.json,
// que é o usado para gerar o gabarito (npm run questoes).
const URL_PYODIDE = 'https://cdn.jsdelivr.net/npm/pyodide@314.0.7/'

async function carregarPython() {
  const { loadPyodide } = await import(/* @vite-ignore */ URL_PYODIDE + 'pyodide.mjs')
  const pyodide = await loadPyodide({ indexURL: URL_PYODIDE })
  return criarExecutor(pyodide)
}

const executorPronto = carregarPython()

executorPronto.then(
  () => self.postMessage({ tipo: 'pronto' }),
  (erro) => self.postMessage({ tipo: 'falha', mensagem: String(erro) }),
)

self.onmessage = async (evento) => {
  const { codigo, entrada } = evento.data
  const executar = await executorPronto
  const { saida, erro } = executar(codigo, entrada)
  self.postMessage({ tipo: 'resultado', saida, erro })
}
