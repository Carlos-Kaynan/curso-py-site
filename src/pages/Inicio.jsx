import { useState } from 'react'
import { Link } from 'react-router-dom'
import BannerEUA from '../components/BannerEUA.jsx'
import Dificuldade from '../components/Dificuldade.jsx'
import IconeStatus from '../components/IconeStatus.jsx'
import { assuntos, chaveDaQuestao } from '../data/assuntos.js'
import { estaResolvida } from '../progresso.js'

// Tira acentos e deixa minúsculo, para "funcao" achar "Funções".
const simplificar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

export default function Inicio() {
  const [busca, setBusca] = useState('')
  const termo = simplificar(busca.trim())

  // Uma questão aparece se o termo estiver no título dela ou no nome do assunto.
  const resultados = termo
    ? assuntos.flatMap((assunto) =>
        assunto.questoes
          .filter((questao) => simplificar(`${questao.titulo} ${assunto.titulo}`).includes(termo))
          .map((questao) => ({ assunto, questao })),
      )
    : []

  return (
    <div className="pagina">
      <BannerEUA>
        <p className="banner-selo">★ Python do básico ao avançado{' '}★</p>
        <h1>Curso_Py</h1>
        <p>Escolha um assunto, resolva as questões e confira na hora se acertou.</p>
        <p className="banner-acoes">
          <Link to="/teoria" className="botao botao-principal">
            📖 Estudar teoria
          </Link>
          <span>Começando agora? Leia a lição “Olá, mundo!” primeiro.</span>
        </p>
      </BannerEUA>

      <label className="busca">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          placeholder="Busque uma questão pelo nome"
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
        />
      </label>

      {termo ? (
        <div className="cartao">
          {resultados.length === 0 && <p className="vazio">Nenhuma questão encontrada para “{busca}”.</p>}
          {resultados.map(({ assunto, questao }) => (
            <Link key={chaveDaQuestao(assunto, questao)} to={`/assunto/${assunto.id}/${questao.id}`} className="linha-lista">
              <span>
                <span className="linha-titulo">{questao.titulo}</span>
                <span className="linha-detalhe">
                  Lista {assunto.numero}: {assunto.titulo}
                </span>
              </span>
              <span className="linha-lado">
                <Dificuldade nivel={questao.dificuldade} />
                <IconeStatus resolvida={estaResolvida(chaveDaQuestao(assunto, questao))} />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="cartao">
          {assuntos.map((assunto) => {
            const feitas = assunto.questoes.filter((q) => estaResolvida(chaveDaQuestao(assunto, q))).length
            const total = assunto.questoes.length
            return (
              <Link key={assunto.id} to={`/assunto/${assunto.id}`} className="linha-lista">
                <span>
                  <span className="linha-titulo">
                    Lista {assunto.numero}: {assunto.titulo}
                  </span>
                  <span className="linha-detalhe">{assunto.descricao}</span>
                </span>
                <span className="linha-lado">
                  <span className="contador">
                    {feitas}/{total}
                  </span>
                  <IconeStatus resolvida={feitas === total} />
                </span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
