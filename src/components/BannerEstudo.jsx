// Banner da tela inicial: uma lousa com código escrito a giz ao fundo e, na frente,
// uma mesa de estudo com livros, o símbolo do Python, um notebook e uma cobrinha de óculos.
// Tudo é desenhado em SVG (sem imagens), no mesmo estilo "plano" da cena de Londres do meu-site.

const AZUL_PYTHON = '#3776AB'
const AMARELO_PYTHON = '#FFD43B'
const AZUL = '#3C3B6E'
const AZUL_ESCURO = '#1F1E4D'
const VERMELHO = '#B22234'
const GIZ = 'rgba(255, 255, 255, 0.75)'

// Coisas escritas a giz na lousa: [texto, x, y, tamanho, cor].
const escritasDeGiz = [
  ['def estudar():', 620, 62, 34, GIZ],
  ['print("Olá!")', 660, 104, 30, '#F7E27A'],
  ['x = 10', 880, 58, 30, GIZ],
  ['a² + b² = c²', 800, 168, 28, '#F4B6C2'],
  ['π', 950, 130, 44, '#A8D4FF'],
  ['for i in range(3):', 40, 300, 28, GIZ],
  ['>>>', 420, 250, 30, '#A8D4FF'],
  ['# todo dia um pouco', 610, 230, 26, '#F7E27A'],
]

function Lousa() {
  return (
    <svg className="banner-fundo" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="1000" height="560" fill="#2E4A3E" />
      {/* Manchas de giz apagado, para a lousa não ficar "lisa" demais */}
      <ellipse cx="300" cy="140" rx="260" ry="70" fill="#fff" opacity="0.035" />
      <ellipse cx="760" cy="330" rx="220" ry="60" fill="#fff" opacity="0.04" />
      <ellipse cx="880" cy="120" rx="120" ry="90" fill="#fff" opacity="0.03" />
      {escritasDeGiz.map(([texto, x, y, tamanho, cor]) => (
        <text key={texto} x={x} y={y} fontFamily="'Caveat', cursive" fontWeight="500" fontSize={tamanho} fill={cor}>
          {texto}
        </text>
      ))}
      {/* Rabiscos: uma seta, uma estrela e um "certinho" */}
      <path d="M835,190 C860,215 900,215 925,195 M925,195 l-14,0 M925,195 l-3,13" stroke={GIZ} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M750,258 l6,14 15,1 -12,9 4,15 -13,-8 -13,8 4,-15 -12,-9 15,-1 z" fill="none" stroke="#F7E27A" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M340,300 l10,12 22,-26" stroke="#A9E5A0" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PilhaDeLivros() {
  // [x, y, largura, altura, cor]
  const livros = [
    [60, 240, 200, 30, VERMELHO],
    [76, 212, 172, 28, AZUL],
    [66, 188, 188, 24, AZUL_PYTHON],
  ]
  return (
    <g>
      {livros.map(([x, y, largura, altura, cor]) => (
        <g key={y}>
          <rect x={x} y={y} width={largura} height={altura} rx="4" fill={cor} />
          <rect x={x + 12} y={y + 4} width="5" height={altura - 8} fill="#fff" opacity="0.5" />
          <rect x={x + largura - 17} y={y + 4} width="5" height={altura - 8} fill="#fff" opacity="0.5" />
          <rect x={x + largura / 2 - 30} y={y + altura / 2 - 3} width="60" height="6" rx="3" fill="#fff" opacity="0.35" />
        </g>
      ))}
      {/* Capelo de formatura em cima dos livros */}
      <polygon points="132,178 188,178 184,190 136,190" fill="#2A2960" />
      <polygon points="98,170 160,150 222,170 160,190" fill={AZUL_ESCURO} />
      <circle cx="160" cy="170" r="4" fill={AMARELO_PYTHON} />
      <path d="M160,170 L210,178 L210,204" stroke={AMARELO_PYTHON} strokeWidth="2.5" fill="none" />
      <rect x="205" y="202" width="10" height="16" rx="3" fill={AMARELO_PYTHON} />
    </g>
  )
}

function Caneca() {
  return (
    <g>
      <path d="M318,208 c-8,-10 8,-16 0,-26 M336,208 c-8,-10 8,-16 0,-26" stroke="#fff" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round" />
      <circle cx="356" cy="240" r="11" fill="none" stroke={VERMELHO} strokeWidth="6" />
      <rect x="304" y="214" width="46" height="56" rx="7" fill={VERMELHO} />
      <text x="327" y="249" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="20" fill="#fff">
        {'{ }'}
      </text>
    </g>
  )
}

function Lapis() {
  return (
    <g transform="translate(400,254)">
      <rect x="18" y="0" width="118" height="14" fill={AMARELO_PYTHON} />
      <rect x="18" y="5" width="118" height="4" fill="#E8B92B" />
      <rect x="136" y="0" width="8" height="14" fill="#B9BCCB" />
      <rect x="144" y="0" width="14" height="14" rx="4" fill="#F4A6B4" />
      <polygon points="18,0 18,14 0,7" fill="#F1D3A6" />
      <polygon points="6,4 6,10 0,7" fill="#3B3B3B" />
    </g>
  )
}

// O símbolo do Python: duas cobrinhas em forma de "L", uma azul e uma amarela.
// A amarela é a mesma forma da azul, girada 180 graus.
const FORMA_COBRINHA =
  'M40,2 H54 Q66,2 66,14 V38 Q66,48 56,48 H42 Q32,48 32,58 V68 H14 Q2,68 2,56 V40 Q2,28 14,28 H28 V14 Q28,2 40,2 Z'

function SimboloPython() {
  return (
    <g>
      <circle cx="500" cy="112" r="96" fill="#fff" opacity="0.08" />
      <circle cx="500" cy="112" r="78" fill="#fff" opacity="0.07" />
      <g transform="translate(425,37) scale(1.5)">
        <path d={FORMA_COBRINHA} fill={AZUL_PYTHON} />
        <circle cx="38" cy="13" r="4" fill="#fff" />
        <g transform="rotate(180 50 50)">
          <path d={FORMA_COBRINHA} fill={AMARELO_PYTHON} />
          <circle cx="38" cy="13" r="4" fill="#fff" />
        </g>
      </g>
    </g>
  )
}

function Notebook() {
  return (
    <g>
      <rect x="600" y="150" width="176" height="112" rx="8" fill={AZUL_ESCURO} />
      <rect x="610" y="160" width="156" height="92" rx="3" fill="#2A2960" />
      <text x="620" y="186" fontFamily="Consolas, monospace" fontSize="13">
        <tspan fill="#8FD0FF">print</tspan>
        <tspan fill="#ECEEFB">(</tspan>
        <tspan fill="#A9E5A0">"Olá, mundo!"</tspan>
        <tspan fill="#ECEEFB">)</tspan>
      </text>
      <text x="620" y="212" fontFamily="Consolas, monospace" fontSize="13" fill="#ECEEFB">
        Olá, mundo!
      </text>
      <rect x="620" y="226" width="8" height="14" fill="#A9E5A0">
        {/* Cursor piscando */}
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>
      <polygon points="584,262 792,262 806,272 570,272" fill="#C5C9DC" />
      <rect x="664" y="262" width="48" height="4" rx="2" fill="#9AA0BD" />
    </g>
  )
}

function CobraDeOculos() {
  return (
    <g>
      {/* Corpo enrolado (três voltas) com a barriga amarela */}
      <ellipse cx="880" cy="256" rx="72" ry="16" fill={AZUL_PYTHON} />
      <path d="M812,262 Q880,280 948,262" stroke={AMARELO_PYTHON} strokeWidth="4" fill="none" />
      <ellipse cx="880" cy="234" rx="58" ry="15" fill="#4A88C0" />
      <path d="M826,240 Q880,256 934,240" stroke={AMARELO_PYTHON} strokeWidth="4" fill="none" />
      <ellipse cx="882" cy="214" rx="44" ry="13" fill={AZUL_PYTHON} />
      {/* Pescoço e cabeça */}
      <path d="M892,212 C912,188 906,162 874,148" stroke={AZUL_PYTHON} strokeWidth="26" fill="none" strokeLinecap="round" />
      <ellipse cx="862" cy="140" rx="31" ry="25" fill={AZUL_PYTHON} />
      <circle cx="872" cy="122" r="4" fill={AMARELO_PYTHON} />
      <circle cx="884" cy="132" r="3" fill={AMARELO_PYTHON} />
      <circle cx="878" cy="152" r="5" fill="#F4A6B4" opacity="0.7" />
      {/* Óculos olhando para o notebook */}
      <line x1="861" y1="136" x2="865" y2="136" stroke={AZUL_ESCURO} strokeWidth="3" />
      <circle cx="851" cy="136" r="10" fill="#fff" stroke={AZUL_ESCURO} strokeWidth="3" />
      <circle cx="875" cy="136" r="10" fill="#fff" stroke={AZUL_ESCURO} strokeWidth="3" />
      <circle cx="847" cy="137" r="3.5" fill={AZUL_ESCURO} />
      <circle cx="871" cy="137" r="3.5" fill={AZUL_ESCURO} />
      {/* Sorriso e língua */}
      <path d="M842,152 Q854,160 866,152" stroke={AZUL_ESCURO} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M833,150 H821 M821,150 L814,145 M821,150 L814,155" stroke={VERMELHO} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Pontinha do rabo */}
      <path d="M810,258 C798,250 802,238 814,240" stroke={AZUL_PYTHON} strokeWidth="8" fill="none" strokeLinecap="round" />
    </g>
  )
}

function MesaDeEstudo() {
  return (
    <svg className="banner-cena" viewBox="0 0 1000 320" aria-hidden="true">
      <SimboloPython />
      <PilhaDeLivros />
      <Caneca />
      <Notebook />
      <CobraDeOculos />
      {/* Tampo da mesa */}
      <rect x="0" y="270" width="1000" height="50" fill="#8A5A33" />
      <rect x="0" y="270" width="1000" height="8" fill="#A8703F" />
      <Lapis />
    </svg>
  )
}

export default function BannerEstudo({ children }) {
  return (
    <section className="banner">
      <Lousa />
      <div className="banner-texto">{children}</div>
      <MesaDeEstudo />
    </section>
  )
}
