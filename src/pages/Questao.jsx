import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { indentUnit } from '@codemirror/language'
import Dificuldade from '../components/Dificuldade.jsx'
import Enunciado from '../components/Enunciado.jsx'
import { buscarAssunto, buscarQuestao, chaveDaQuestao } from '../data/assuntos.js'
import { saidasIguais } from '../python/comparar.js'
import { executarPython, prepararPython } from '../python/executor.js'
import { lerCodigo, marcarResolvida, salvarCodigo } from '../progresso.js'
import NaoEncontrado from './NaoEncontrado.jsx'

const CODIGO_INICIAL = `# Escreva sua solução aqui.
# Use input() para ler cada linha da entrada e print() para mostrar a resposta.

`

// Extensões do editor: cores do Python e indentação de 4 espaços.
const EXTENSOES_EDITOR = [python(), indentUnit.of('    ')]

export default function Questao() {
  const { assuntoId, questaoId } = useParams()
  const assunto = buscarAssunto(assuntoId)
  const questao = buscarQuestao(assuntoId, questaoId)
  if (!assunto || !questao) return <NaoEncontrado />

  // A "key" faz o React criar a tela do zero ao trocar de questão,
  // em vez de reaproveitar o código e os resultados da questão anterior.
  return <Resolver key={chaveDaQuestao(assunto, questao)} assunto={assunto} questao={questao} />
}

function Resolver({ assunto, questao }) {
  const chave = chaveDaQuestao(assunto, questao)
  const [codigo, setCodigo] = useState(() => lerCodigo(chave) ?? CODIGO_INICIAL)
  const [entradaConsole, setEntradaConsole] = useState(questao.exemplos[0]?.entrada ?? '')
  const [execucao, setExecucao] = useState(null) // resultado do botão Executar
  const [envio, setEnvio] = useState(null) // resultado do botão Enviar
  const [ocupado, setOcupado] = useState(null) // 'executar' | 'enviar' | null
  const [estadoPython, setEstadoPython] = useState('carregando')

  // Começa a baixar o Python assim que a tela abre (demora alguns segundos na 1ª vez).
  useEffect(() => {
    prepararPython().then(
      () => setEstadoPython('pronto'),
      () => setEstadoPython('erro'),
    )
  }, [])

  // Salva o código no navegador a cada mudança, para não perder ao sair da página.
  useEffect(() => {
    salvarCodigo(chave, codigo)
  }, [chave, codigo])

  async function executar() {
    setOcupado('executar')
    setExecucao(null)
    try {
      setExecucao(await executarPython(codigo, entradaConsole))
      setEstadoPython('pronto')
    } catch (erro) {
      setExecucao({ saida: '', erro: 'Não foi possível carregar o Python. Verifique sua internet.\n' + erro.message })
    }
    setOcupado(null)
  }

  async function enviar() {
    setOcupado('enviar')
    const casos = [
      ...questao.exemplos.map((caso) => ({ ...caso, oculto: false })),
      ...questao.testes.map((caso) => ({ ...caso, oculto: true })),
    ]
    const resultados = []
    try {
      for (const [indice, caso] of casos.entries()) {
        setEnvio({ testando: indice + 1, total: casos.length })
        const { saida, erro } = await executarPython(codigo, caso.entrada)
        resultados.push({
          ...caso,
          numero: indice + 1,
          obtida: saida,
          erro,
          acertou: !erro && saidasIguais(saida, caso.saida),
        })
      }
    } catch (erro) {
      setEnvio({ falhaPython: erro.message })
      setOcupado(null)
      return
    }
    const aceito = resultados.every((r) => r.acertou)
    if (aceito) marcarResolvida(chave)
    setEnvio({ resultados, aceito })
    setOcupado(null)
  }

  function recomecar() {
    if (window.confirm('Apagar seu código e começar de novo?')) setCodigo(CODIGO_INICIAL)
  }

  return (
    <div className="resolver">
      <section className="painel-enunciado">
        <Link to={`/assunto/${assunto.id}`} className="voltar">
          ← Lista {assunto.numero}: {assunto.titulo}
        </Link>
        <div className="titulo-questao">
          <h1>
            {questao.letra}. {questao.titulo}
          </h1>
          <Dificuldade nivel={questao.dificuldade} />
        </div>
        <p className="meta">
          <strong>Peso:</strong> {questao.peso} · <strong>Casos de teste:</strong> {questao.exemplos.length} exemplo(s) +{' '}
          {questao.testes.length} oculto(s)
        </p>
        <Enunciado questao={questao} />
      </section>

      <section className="painel-codigo">
        <div className="barra-ferramentas">
          <span className="linguagem">Python 3</span>
          <StatusPython estado={estadoPython} />
          <div className="botoes">
            <button className="botao" onClick={recomecar} disabled={Boolean(ocupado)}>
              Recomeçar
            </button>
            <button className="botao" onClick={executar} disabled={Boolean(ocupado)}>
              {ocupado === 'executar' ? 'Executando…' : 'Executar'}
            </button>
            <button className="botao botao-principal" onClick={enviar} disabled={Boolean(ocupado)}>
              {ocupado === 'enviar' ? 'Corrigindo…' : 'Enviar'}
            </button>
          </div>
        </div>

        <div className="editor">
          <CodeMirror
            value={codigo}
            onChange={setCodigo}
            extensions={EXTENSOES_EDITOR}
            basicSetup={{ tabSize: 4 }}
            height="100%"
            aria-label="Editor de código Python"
          />
        </div>

        {envio && <ResultadoEnvio envio={envio} />}

        <h2 className="titulo-console">Console</h2>
        <p className="dica-console">
          Digite uma entrada (uma linha para cada <code>input()</code>) e clique em <strong>Executar</strong> para testar. Para
          saber se acertou, clique em <strong>Enviar</strong>.
        </p>
        <div className="console">
          <label>
            <span>Entrada</span>
            <textarea value={entradaConsole} onChange={(evento) => setEntradaConsole(evento.target.value)} spellCheck={false} />
          </label>
          <div>
            <span>Saída</span>
            <pre className={execucao?.erro ? 'com-erro' : ''}>
              {execucao ? execucao.saida + (execucao.erro ?? '') : ''}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatusPython({ estado }) {
  if (estado === 'carregando') return <span className="status-python">⏳ Carregando o Python…</span>
  if (estado === 'erro') return <span className="status-python erro">⚠️ Python não carregou</span>
  return <span className="status-python ok">● Python pronto</span>
}

function ResultadoEnvio({ envio }) {
  if (envio.falhaPython) {
    return (
      <div className="resultado reprovado" role="status">
        <p className="resultado-titulo">Não foi possível carregar o Python. Verifique sua internet e tente de novo.</p>
      </div>
    )
  }

  if (envio.testando) {
    return (
      <div className="resultado" role="status">
        <p className="resultado-titulo">
          Testando caso {envio.testando} de {envio.total}…
        </p>
      </div>
    )
  }

  const acertos = envio.resultados.filter((r) => r.acertou).length
  return (
    <div className={`resultado ${envio.aceito ? 'aceito' : 'reprovado'}`} role="status">
      <p className="resultado-titulo">
        {envio.aceito
          ? `✅ Aceito! Seu código passou nos ${acertos} casos de teste.`
          : `❌ Ainda não. Seu código passou em ${acertos} de ${envio.resultados.length} casos de teste.`}
      </p>
      <ul className="lista-casos">
        {envio.resultados.map((r) => (
          <li key={r.numero}>
            <span className={r.acertou ? 'caso-ok' : 'caso-erro'}>
              {r.acertou ? '✓' : '✗'} Caso {r.numero} {r.oculto ? '(oculto)' : '(exemplo)'}
              {!r.acertou && (r.erro ? ': erro de execução' : ': resposta errada')}
            </span>
            {!r.acertou && <DetalheFalha resultado={r} />}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Nos exemplos mostramos tudo; nos casos ocultos, só o erro (se houver),
// para o aluno não "decorar" a resposta esperada.
function DetalheFalha({ resultado }) {
  return (
    <div className="detalhe-falha">
      {!resultado.oculto && (
        <div className="exemplo-colunas tres">
          <div>
            <span>Entrada</span>
            <pre>{resultado.entrada}</pre>
          </div>
          <div>
            <span>Saída esperada</span>
            <pre>{resultado.saida}</pre>
          </div>
          <div>
            <span>Sua saída</span>
            <pre>{resultado.obtida}</pre>
          </div>
        </div>
      )}
      {resultado.erro && <pre className="com-erro">{resultado.erro}</pre>}
      {resultado.oculto && !resultado.erro && (
        <p className="dica">Dica: pense em casos diferentes dos exemplos (números negativos, zero, listas vazias…).</p>
      )}
    </div>
  )
}
