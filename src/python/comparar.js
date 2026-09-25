// Deixa a comparação justa: ignora espaços no fim das linhas e linhas vazias no final,
// que são diferenças invisíveis para quem olha a saída.
export function normalizarSaida(texto) {
  return texto
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((linha) => linha.trimEnd())
    .join('\n')
    .trimEnd()
}

export function saidasIguais(obtida, esperada) {
  return normalizarSaida(obtida) === normalizarSaida(esperada)
}
