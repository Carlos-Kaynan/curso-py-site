import { Fragment, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Dificuldade from '../components/Dificuldade.jsx'
import Enunciado from '../components/Enunciado.jsx'
import IconeStatus from '../components/IconeStatus.jsx'
import { buscarAssunto, chaveDaQuestao } from '../data/assuntos.js'
import { estaResolvida } from '../progresso.js'
import NaoEncontrado from './NaoEncontrado.jsx'

export default function Assunto() {
  const { assuntoId } = useParams()
  const assunto = buscarAssunto(assuntoId)
  // Qual questão está com o enunciado aberto (só uma por vez).
  const [aberta, setAberta] = useState(null)

  if (!assunto) return <NaoEncontrado />

  return (
    <div className="pagina">
      <Link to="/" className="voltar">
        ← Todos os assuntos
      </Link>
      <h1>
        Lista {assunto.numero}: {assunto.titulo}
      </h1>
      <p className="subtitulo">{assunto.descricao}</p>

      <div className="cartao">
        <table className="tabela-questoes">
          <thead>
            <tr>
              <th>Título</th>
              <th>Status</th>
              <th>Dificuldade</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            {assunto.questoes.map((questao) => {
              const estaAberta = aberta === questao.id
              return (
                <Fragment key={questao.id}>
                  <tr className={estaAberta ? 'aberta' : ''}>
                    <td>
                      <button
                        className="botao-titulo"
                        aria-expanded={estaAberta}
                        onClick={() => setAberta(estaAberta ? null : questao.id)}
                      >
                        {questao.letra}. {questao.titulo}
                      </button>
                    </td>
                    <td>
                      <IconeStatus resolvida={estaResolvida(chaveDaQuestao(assunto, questao))} />
                    </td>
                    <td>
                      <Dificuldade nivel={questao.dificuldade} />
                    </td>
                    <td className="peso">{questao.peso}</td>
                  </tr>
                  {estaAberta && (
                    <tr className="detalhe">
                      <td colSpan={4}>
                        <div className="detalhe-topo">
                          <p>
                            <strong>Casos de teste:</strong> {questao.exemplos.length} exemplo(s) +{' '}
                            {questao.testes.length} oculto(s)
                          </p>
                          <Link to={`/assunto/${assunto.id}/${questao.id}`} className="botao botao-principal">
                            Resolver
                          </Link>
                        </div>
                        <Enunciado questao={questao} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
