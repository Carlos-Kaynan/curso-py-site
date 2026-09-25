// Guarda o progresso do aluno no próprio navegador (localStorage).
// Tudo fica dentro de try/catch porque o navegador pode bloquear o localStorage
// (ex.: janela anônima); nesse caso o site continua funcionando, só não lembra.
const CHAVE_RESOLVIDAS = 'curso-py:resolvidas'
const PREFIXO_CODIGO = 'curso-py:codigo:'

function lerResolvidas() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_RESOLVIDAS)) ?? {}
  } catch {
    return {}
  }
}

export function estaResolvida(chave) {
  return Boolean(lerResolvidas()[chave])
}

export function marcarResolvida(chave) {
  try {
    const resolvidas = lerResolvidas()
    resolvidas[chave] = true
    localStorage.setItem(CHAVE_RESOLVIDAS, JSON.stringify(resolvidas))
  } catch {
    // sem localStorage: ignora
  }
}

export function lerCodigo(chave) {
  try {
    return localStorage.getItem(PREFIXO_CODIGO + chave)
  } catch {
    return null
  }
}

export function salvarCodigo(chave, codigo) {
  try {
    localStorage.setItem(PREFIXO_CODIGO + chave, codigo)
  } catch {
    // sem localStorage: ignora
  }
}
