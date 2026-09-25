const NOMES = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }

export default function Dificuldade({ nivel }) {
  return <span className={`dificuldade dificuldade-${nivel}`}>{NOMES[nivel]}</span>
}
