import { useState } from 'react'
import { classHighlighter, highlightCode } from '@lezer/highlight'
import { parser } from '@lezer/python'

// Pinta o código Python com as mesmas regras do editor, mas sem carregar o editor:
// cada pedaço (palavra-chave, texto, número...) ganha uma classe CSS "tok-...".
function colorir(codigo) {
  const pedacos = []
  highlightCode(
    codigo,
    parser.parse(codigo),
    classHighlighter,
    (texto, classes) => pedacos.push(classes ? <span key={pedacos.length} className={classes}>{texto}</span> : texto),
    () => pedacos.push('\n'),
  )
  return pedacos
}

export default function BlocoCodigo({ codigo, saida, entrada, erro }) {
  const [copiado, setCopiado] = useState(false)

  async function copiar() {
    try {
      await navigator.clipboard.writeText(codigo)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 1500)
    } catch {
      // o navegador não deixou copiar: não faz nada
    }
  }

  return (
    <figure className="bloco-codigo">
      <div className="bloco-codigo-topo">
        <span>Python</span>
        <button type="button" onClick={copiar}>
          {copiado ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
      <pre className="bloco-codigo-fonte">
        <code>{colorir(codigo)}</code>
      </pre>
      {entrada && (
        <div className="bloco-codigo-entrada">
          <span>Entrada digitada</span>
          <pre>{entrada.join('\n')}</pre>
        </div>
      )}
      <div className={`bloco-codigo-saida ${erro ? 'com-erro' : ''}`}>
        <span>{erro ? 'Erro' : 'Saída'}</span>
        <pre>{saida}</pre>
      </div>
    </figure>
  )
}
