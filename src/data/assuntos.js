// questoes.json é GERADO pelo comando "npm run questoes". Não edite ele à mão:
// edite os arquivos da pasta questoes/ e rode o comando de novo.
import dados from './questoes.json'

export const assuntos = dados.assuntos

export function buscarAssunto(assuntoId) {
  return assuntos.find((assunto) => assunto.id === assuntoId)
}

export function buscarQuestao(assuntoId, questaoId) {
  return buscarAssunto(assuntoId)?.questoes.find((questao) => questao.id === questaoId)
}

// Identificador único de uma questão no site todo (usado para salvar o progresso).
export function chaveDaQuestao(assunto, questao) {
  return `${assunto.id}/${questao.id}`
}
