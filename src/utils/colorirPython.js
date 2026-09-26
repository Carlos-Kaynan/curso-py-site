import { classHighlighter, highlightCode } from '@lezer/highlight'
import { parser } from '@lezer/python'

// Pinta código Python com as mesmas regras do editor, mas sem carregar o editor.
// Devolve uma lista de linhas; cada linha é uma lista de pedaços { texto, classes }.
// As classes ("tok-keyword", "tok-string"...) ganham cor no App.css (.codigo-escuro).
export function colorirPython(codigo) {
  const linhas = [[]]
  highlightCode(
    codigo,
    parser.parse(codigo),
    classHighlighter,
    (texto, classes) => linhas.at(-1).push({ texto, classes }),
    () => linhas.push([]),
  )
  return linhas
}
