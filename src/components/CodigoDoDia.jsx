import { useState } from 'react'
import { Link } from 'react-router-dom'
import { codigosDoDia, niveis, temas } from '../data/codigosDoDia.js'
import { executarPython } from '../python/executor.js'
import { colorirPython } from '../utils/colorirPython.js'
import { diaDoAno } from '../utils/diaDoAno.js'
import { LinhaColorida } from './BlocoCodigo.jsx'
import TextoRico from './TextoRico.jsx'

// Escolhe um código diferente para cada dia do ano (igual à "Conversa do dia" do meu-site).
function indiceDeHoje() {
  return diaDoAno() % codigosDoDia.length
}

// As 3 opções do desafio: as 2 erradas com a certa no meio.
// A posição da certa muda de código para código, para ninguém "decorar" que é sempre a mesma.
function montarOpcoes(item, indice) {
  const opcoes = [...item.erradas]
  opcoes.splice(indice % 3, 0, item.saida)
  return opcoes
}

export default function CodigoDoDia() {
  const [indice, setIndice] = useState(indiceDeHoje)
  const [escolha, setEscolha] = useState(null) // qual opção o aluno clicou
  const [execucao, setExecucao] = useState(null) // resultado do botão Executar
  const [rodando, setRodando] = useState(false)

  const item = codigosDoDia[indice]
  const tema = temas[item.tema]
  const nivel = niveis[item.nivel]
  const codigo = item.linhas.map(([linha]) => linha).join('\n')
  const linhasColoridas = colorirPython(codigo)
  const opcoes = montarOpcoes(item, indice)
  const respondeu = escolha !== null
  const acertou = respondeu && opcoes[escolha] === item.saida

  async function executar() {
    setRodando(true)
    try {
      setExecucao(await executarPython(codigo, ''))
    } catch {
      setExecucao({ saida: '', erro: 'Não foi possível carregar o Python. Verifique sua internet.' })
    }
    setRodando(false)
  }

  function outroCodigo() {
    setIndice((atual) => (atual + 1) % codigosDoDia.length)
    setEscolha(null)
    setExecucao(null)
  }

  function classeDaOpcao(i) {
    if (!respondeu) return 'opcao'
    if (opcoes[i] === item.saida) return 'opcao certa'
    if (i === escolha) return 'opcao errada'
    return 'opcao apagada'
  }

  return (
    <section className="codigo-dia" aria-labelledby="titulo-codigo-dia">
      <div className="codigo-dia-texto">
        <h2 id="titulo-codigo-dia">Código do dia</h2>
        <p>
          Um código curto e diferente a cada dia, entre os nossos {codigosDoDia.length}. Leia a explicação de cada linha, tente
          adivinhar o que ele mostra na tela e rode para conferir.
        </p>
        <Link to={`/teoria/${tema.licao}`} className="botao botao-principal">
          Ver a lição de {tema.nome.toLowerCase()} →
        </Link>
      </div>

      <div className="codigo-dia-lado">
        <div className="codigo-dia-cartao">
          <div className="codigo-dia-topo">
            <span className="codigo-dia-numero">{indice + 1}</span>
            <p className="codigo-dia-titulo">{item.titulo}</p>
          </div>
          <p className="codigo-dia-etiquetas">
            <span className={`etiqueta etiqueta-${item.nivel}`}>
              {nivel.emoji} {nivel.nome}
            </span>
            <span className="etiqueta">
              {tema.icone} {tema.nome}
            </span>
          </p>

          <ol className="codigo-dia-linhas">
            {item.linhas.map(([, explicacao], i) => (
              <li key={i}>
                <code className="linha-codigo codigo-escuro">
                  <LinhaColorida pedacos={linhasColoridas[i]} />
                </code>
                {explicacao && (
                  <span className="linha-explicacao">
                    <TextoRico texto={explicacao} />
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="desafio">
            <p className="desafio-pergunta">🤔 Qual é a saída?</p>
            <div className="desafio-opcoes">
              {opcoes.map((opcao, i) => (
                <button key={i} type="button" className={classeDaOpcao(i)} onClick={() => setEscolha(i)} disabled={respondeu}>
                  <pre>{opcao}</pre>
                </button>
              ))}
            </div>
            <p className="desafio-resultado" role="status">
              {respondeu && (acertou ? '✅ Acertou! Clique em Executar para ver o Python confirmar.' : '❌ Quase! A resposta certa está em verde. Clique em Executar para conferir.')}
            </p>
          </div>

          {execucao && (
            <div className={`codigo-dia-saida ${execucao.erro ? 'com-erro' : ''}`}>
              <span>Saída do Python</span>
              <pre>{execucao.saida + (execucao.erro ?? '')}</pre>
            </div>
          )}
        </div>

        <div className="codigo-dia-botoes">
          <button type="button" className="botao botao-branco" onClick={executar} disabled={rodando}>
            {rodando ? '⏳ Executando…' : '▶ Executar'}
          </button>
          <button type="button" className="botao botao-contorno" onClick={outroCodigo} disabled={rodando}>
            Outro código →
          </button>
        </div>
      </div>
    </section>
  )
}
