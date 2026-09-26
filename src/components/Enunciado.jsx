// Mostra o enunciado de uma questão: texto, entrada, saída, observações e exemplos.
function BlocoDestaque({ itens }) {
  if (!itens?.length) return null
  return (
    <div className="bloco-destaque">
      {itens.map((item, i) => (
        <p key={i}>{item || '\u00a0'}</p>
      ))}
    </div>
  )
}

export default function Enunciado({ questao }) {
  return (
    <div className="enunciado">
      <h3>Enunciado</h3>
      <p className="texto-enunciado">{questao.enunciado}</p>

      <h3>Entrada</h3>
      {questao.entrada.texto && <p>{questao.entrada.texto}</p>}
      <BlocoDestaque itens={questao.entrada.itens} />

      <h3>Saída</h3>
      {questao.saida.texto && <p>{questao.saida.texto}</p>}
      <BlocoDestaque itens={questao.saida.itens} />

      {questao.observacoes.length > 0 && (
        <>
          <h3>Observações</h3>
          <ul>
            {questao.observacoes.map((obs, i) => (
              <li key={i}>{obs}</li>
            ))}
          </ul>
        </>
      )}

      <h3>Exemplos</h3>
      {questao.exemplos.map((exemplo, i) => (
        <div className="exemplo" key={i}>
          <p className="exemplo-titulo">Caso {i + 1}</p>
          <div className="exemplo-colunas">
            <div>
              <span>Entrada</span>
              <pre>{exemplo.entrada}</pre>
            </div>
            <div>
              <span>Saída</span>
              <pre>{exemplo.saida}</pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
