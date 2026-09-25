// Conversa com o Web Worker que roda o Python.
// A página só precisa de duas funções: prepararPython() e executarPython().

export const TEMPO_LIMITE_MS = 5000

let worker = null
let pythonPronto = null // Promise que termina quando o Pyodide acabou de carregar
let execucaoAtual = null // { resolve, timer } da execução em andamento

function iniciarWorker() {
  worker = new Worker(new URL('./python.worker.js', import.meta.url), { type: 'module' })

  pythonPronto = new Promise((resolve, reject) => {
    worker.onmessage = (evento) => {
      const mensagem = evento.data
      if (mensagem.tipo === 'pronto') resolve()
      if (mensagem.tipo === 'falha') reject(new Error(mensagem.mensagem))
      if (mensagem.tipo === 'resultado') terminarExecucao({ saida: mensagem.saida, erro: mensagem.erro })
    }
    worker.onerror = () => reject(new Error('Não foi possível iniciar o Python.'))
  })

  // Se o carregamento falhar (ex.: sem internet), a próxima tentativa começa do zero.
  pythonPronto.catch(() => descartarWorker())
}

function descartarWorker() {
  worker?.terminate()
  worker = null
  pythonPronto = null
}

function terminarExecucao(resultado) {
  if (!execucaoAtual) return
  clearTimeout(execucaoAtual.timer)
  execucaoAtual.resolve(resultado)
  execucaoAtual = null
}

// Começa a carregar o Python (se ainda não começou). Pode ser chamada várias vezes.
export function prepararPython() {
  if (!pythonPronto) iniciarWorker()
  return pythonPronto
}

// Roda o código com a entrada dada. Devolve { saida, erro }.
export async function executarPython(codigo, entrada) {
  await prepararPython()

  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      // O código demorou demais: "mata" o worker. Um novo será criado na próxima execução.
      execucaoAtual = null
      descartarWorker()
      resolve({
        saida: '',
        erro: `Tempo limite de ${TEMPO_LIMITE_MS / 1000} segundos excedido.\nSerá que existe um laço (while) que nunca termina, ou um input() a mais esperando entrada?`,
      })
    }, TEMPO_LIMITE_MS)

    execucaoAtual = { resolve, timer }
    worker.postMessage({ codigo, entrada })
  })
}
