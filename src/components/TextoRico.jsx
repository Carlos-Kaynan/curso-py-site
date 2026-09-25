// Mostra um texto com uma formatação bem simples:
//   `assim` vira código, e **assim** vira negrito.
export default function TextoRico({ texto }) {
  const partes = texto.split(/(`[^`]+`|\*\*[^*]+\*\*)/g)
  return partes.map((parte, i) => {
    if (parte.length > 2 && parte.startsWith('`') && parte.endsWith('`')) return <code key={i}>{parte.slice(1, -1)}</code>
    if (parte.length > 4 && parte.startsWith('**') && parte.endsWith('**')) return <strong key={i}>{parte.slice(2, -2)}</strong>
    return parte
  })
}
