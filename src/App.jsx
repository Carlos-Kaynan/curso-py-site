import { lazy, Suspense } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Assunto from './pages/Assunto.jsx'
import Inicio from './pages/Inicio.jsx'
import NaoEncontrado from './pages/NaoEncontrado.jsx'
import './App.css'

// Estas páginas só são baixadas quando o aluno abre uma delas (lazy):
// a de resolver traz o editor de código, e a teoria traz o texto das lições.
const Questao = lazy(() => import('./pages/Questao.jsx'))
const Teoria = lazy(() => import('./pages/Teoria.jsx'))
const Licao = lazy(() => import('./pages/Licao.jsx'))

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
        <NavLink to="/teoria" className={({ isActive }) => `botao-teoria ${isActive ? 'ativo' : ''}`}>
          <span aria-hidden="true">📖</span> Estudar teoria
        </NavLink>
      </header>
      <div className="faixa-listrada" aria-hidden="true" />
      <main>
        <Suspense fallback={<p className="pagina">Carregando…</p>}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/teoria" element={<Teoria />} />
            <Route path="/teoria/:licaoId" element={<Licao />} />
            <Route path="/assunto/:assuntoId" element={<Assunto />} />
            <Route path="/assunto/:assuntoId/:questaoId" element={<Questao />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}
