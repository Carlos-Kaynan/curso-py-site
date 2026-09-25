import { lazy, Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Assunto from './pages/Assunto.jsx'
import Inicio from './pages/Inicio.jsx'
import NaoEncontrado from './pages/NaoEncontrado.jsx'
import './App.css'

// A página de resolver traz o editor de código, que é pesado.
// Com lazy(), ela só é baixada quando o aluno abre uma questão.
const Questao = lazy(() => import('./pages/Questao.jsx'))

export default function App() {
  return (
    <>
      <header className="topo">
        <Link to="/" className="logo">
          <span className="logo-estrela" aria-hidden="true">
            ★
          </span>
          Curso<span>_Py</span>
        </Link>
      </header>
      <div className="faixa-listrada" aria-hidden="true" />
      <main>
        <Suspense fallback={<p className="pagina">Carregando…</p>}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/assunto/:assuntoId" element={<Assunto />} />
            <Route path="/assunto/:assuntoId/:questaoId" element={<Questao />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}
