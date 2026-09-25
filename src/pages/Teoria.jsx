import { Link } from 'react-router-dom'
import IconeStatus from '../components/IconeStatus.jsx'
import { licoes } from '../data/teoria/index.js'
import { estaLida } from '../progresso.js'

export default function Teoria() {
  const lidas = licoes.filter((licao) => estaLida(licao.id)).length

  return (
    <div className="pagina">
      <Link to="/" className="voltar">
        ← Início
      </Link>
      <h1>📖 Estudar teoria</h1>
      <p className="subtitulo">
        Lições curtas para ler antes de praticar, em ordem. Você já leu {lidas} de {licoes.length}.
      </p>

      <ol className="grade-licoes">
        {licoes.map((licao, i) => (
          <li key={licao.id}>
            <Link to={`/teoria/${licao.id}`} className="cartao-licao">
              <span className="cartao-licao-topo">
                <span className="numero-licao">Lição {i + 1}</span>
                <IconeStatus resolvida={estaLida(licao.id)} />
              </span>
              <span className="cartao-licao-titulo">{licao.titulo}</span>
              <span className="cartao-licao-resumo">{licao.resumo}</span>
              <span className="cartao-licao-tempo">⏱ {licao.minutos} min de leitura</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
