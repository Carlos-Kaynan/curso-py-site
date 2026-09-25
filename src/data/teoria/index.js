// Ordem das lições na área "Estudar teoria".
// Para criar uma lição nova: copie um arquivo desta pasta, mude o conteúdo,
// importe aqui, coloque na lista e rode "npm run teoria" para conferir as saídas.
import primeirosPassos from './01-primeiros-passos.js'
import variaveisEInput from './02-variaveis-e-input.js'
import condicionais from './03-condicionais.js'
import repeticao from './04-repeticao.js'
import listas from './05-listas.js'
import dicionarios from './06-dicionarios.js'
import funcoes from './07-funcoes.js'

export const licoes = [primeirosPassos, variaveisEInput, condicionais, repeticao, listas, dicionarios, funcoes]

export function buscarLicao(licaoId) {
  return licoes.find((licao) => licao.id === licaoId)
}
