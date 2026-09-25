import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BlocoCodigo from '../components/BlocoCodigo.jsx'
import IconeStatus from '../components/IconeStatus.jsx'
import TextoRico from '../components/TextoRico.jsx'
import { buscarAssunto } from '../data/assuntos.js'
import { buscarLicao, licoes } from '../data/teoria/index.js'
import { estaLida, marcarLida } from '../progresso.js'
import NaoEncontrado from './NaoEncontrado.jsx'

export default function Licao() {
  const { licaoId } = useParams()
  const licao = buscarLicao(licaoId)
  if (!licao) return <NaoEncontrado />
  // A "key" recria a tela ao trocar de lição (volta ao topo e relê o "lida").
  return <ConteudoLicao key={licao.id} licao={licao} />
}

// Desenha um bloco da lição de acordo com o tipo dele.
function Bloco({ bloco }) {
  switch (bloco.tipo) {
    case 'titulo':
      return <h2>{bloco.texto}</h2>
    case 'texto':
      return (
        <p>
          <TextoRico texto={bloco.texto} />
        </p>
      )
    case 'lista':
      return (
        <ul>
          {bloco.itens.map((item, i) => (
            <li key={i}>
              <TextoRico texto={item} />
            </li>
          ))}
        </ul>
      )
    case 'codigo':
      return <BlocoCodigo codigo={bloco.codigo} saida={bloco.saida} entrada={bloco.entrada} erro={bloco.erro} />
    case 'dica':
    case 'cuidado':
      return (
        <aside className={`caixa caixa-${bloco.tipo}`}>
          <strong>{bloco.tipo === 'dica' ? '💡 Dica' : '⚠️ Cuidado'}</strong>
          <p>
            <TextoRico texto={bloco.texto} />
          </p>
        </aside>
      )
    case 'resumo':
      return (
        <aside className="caixa caixa-resumo">
          <strong>🧠 Resumo</strong>
          <ul>
            {bloco.itens.map((item, i) => (
              <li key={i}>
                <TextoRico texto={item} />
              </li>
            ))}
          </ul>
        </aside>
      )
    default:
      return null
  }
}

function ConteudoLicao({ licao }) {
  const [lida, setLida] = useState(() => estaLida(licao.id))
  const posicao = licoes.indexOf(licao)
  const anterior = licoes[posicao - 1]
  const proxima = licoes[posicao + 1]
  const assuntoPraticar = licao.praticar && buscarAssunto(licao.praticar)

  // Ao abrir uma lição, começa a leitura do topo da página.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function alternarLida() {
    marcarLida(licao.id, !lida)
    setLida(!lida)
  }

  return (
    <div className="licao">
      <nav className="licao-menu" aria-label="Lições">
        <Link to="/teoria" className="voltar">
          ← Todas as lições
        </Link>
        <ol>
          {licoes.map((item, i) => (
            <li key={item.id}>
              <Link to={`/teoria/${item.id}`} className={item.id === licao.id ? 'atual' : ''} aria-current={item.id === licao.id ? 'page' : undefined}>
                <IconeStatus resolvida={item.id === licao.id ? lida : estaLida(item.id)} />
                <span>
                  {i + 1}. {item.titulo}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <article className="licao-conteudo">
        <p className="licao-meta">
          Lição {posicao + 1} de {licoes.length} · ⏱ {licao.minutos} min de leitura
        </p>
        <h1>{licao.titulo}</h1>
        <p className="licao-resumo">{licao.resumo}</p>

        {licao.blocos.map((bloco, i) => (
          <Bloco key={i} bloco={bloco} />
        ))}

        <div className="licao-fim">
          <button type="button" className={`botao ${lida ? 'botao-lida' : ''}`} onClick={alternarLida}>
            {lida ? '✓ Lição lida' : 'Marcar como lida'}
          </button>

          {assuntoPraticar && (
            <div className="praticar">
              <p>
                <strong>Hora de praticar!</strong> Resolva as questões da Lista {assuntoPraticar.numero}: {assuntoPraticar.titulo}.
              </p>
              <Link to={`/assunto/${assuntoPraticar.id}`} className="botao botao-principal">
                Praticar agora →
              </Link>
            </div>
          )}

          <nav className="licao-navegacao" aria-label="Navegar entre lições">
            {anterior ? (
              <Link to={`/teoria/${anterior.id}`} className="botao">
                ← {anterior.titulo}
              </Link>
            ) : (
              <span />
            )}
            {proxima && (
              <Link to={`/teoria/${proxima.id}`} className="botao">
                {proxima.titulo} →
              </Link>
            )}
          </nav>
        </div>
      </article>
    </div>
  )
}
