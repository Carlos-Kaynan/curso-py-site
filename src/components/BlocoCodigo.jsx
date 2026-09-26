import { Fragment, useState } from 'react'
import { colorirPython } from '../utils/colorirPython.js'

// Uma linha de código colorida: cada pedaço vira um <span> com a classe de cor dele.
export function LinhaColorida({ pedacos }) {
  return pedacos.map((pedaco, i) =>
    pedaco.classes ? (
      <span key={i} className={pedaco.classes}>
        {pedaco.texto}
      </span>
    ) : (
      pedaco.texto
    ),
  )
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
      <pre className="bloco-codigo-fonte codigo-escuro">
        <code>
          {colorirPython(codigo).map((linha, i) => (
            <Fragment key={i}>
              {i > 0 && '\n'}
              <LinhaColorida pedacos={linha} />
            </Fragment>
          ))}
        </code>
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
