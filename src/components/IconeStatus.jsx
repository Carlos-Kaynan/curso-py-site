// Bolinha verde com ✓ (resolvida) ou círculo cinza vazio (pendente).
export default function IconeStatus({ resolvida }) {
  if (!resolvida) {
    return (
      <svg className="icone-status pendente" viewBox="0 0 24 24" role="img" aria-label="Pendente">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  return (
    <svg className="icone-status resolvida" viewBox="0 0 24 24" role="img" aria-label="Resolvida">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
