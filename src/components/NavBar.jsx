import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur border-b border-ink-900/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="focus-ring rounded-lg">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-600">
          <a href="/#problema" className="hover:text-ink-900 transition-colors">El problema</a>
          <a href="/#modulos" className="hover:text-ink-900 transition-colors">Módulos</a>
          <a href="/#precios" className="hover:text-ink-900 transition-colors">Precios</a>
          <Link to="/demo" className="hover:text-ink-900 transition-colors">Demo</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="focus-ring text-sm font-semibold text-ink-900 hover:text-teal-600 transition-colors hidden sm:inline"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => navigate('/registro')}
            className="focus-ring bg-coral-500 hover:bg-coral-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
          >
            Probar gratis
          </button>
        </div>
      </div>
    </header>
  )
}
