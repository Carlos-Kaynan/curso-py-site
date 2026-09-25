import { Link } from 'react-router-dom'

export default function NaoEncontrado() {
  return (
    <div className="pagina">
      <h1>Página não encontrada</h1>
      <p className="subtitulo">Esse assunto ou questão não existe.</p>
      <Link to="/" className="botao botao-principal">
        Voltar para o início
      </Link>
    </div>
  )
}
