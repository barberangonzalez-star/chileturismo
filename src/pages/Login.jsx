import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import { supabase } from '../lib/supabaseClient.js'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      setError(
        error.message === 'Invalid login credentials'
          ? 'Correo o contraseña incorrectos.'
          : error.message
      )
      return
    }
    navigate('/demo')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm bg-white rounded-2xl border border-ink-900/5 p-7 shadow-sm">
          <h1 className="font-display font-extrabold text-2xl text-ink-900">Iniciar sesión</h1>
          <p className="mt-1.5 text-sm text-ink-600">Entra a tu panel de operador.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="block text-sm font-medium text-ink-800 mb-1.5">Correo electrónico</span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-ring w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm outline-none"
                placeholder="tu@negocio.cl"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-ink-800 mb-1.5">Contraseña</span>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus-ring w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm outline-none"
                placeholder="••••••••"
              />
            </label>

            {error && (
              <p className="text-sm text-coral-600 bg-coral-50 rounded-xl px-3.5 py-2.5">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="focus-ring w-full bg-coral-500 hover:bg-coral-600 disabled:opacity-60 text-white font-semibold py-3 rounded-full transition-colors"
            >
              {loading ? 'Entrando…' : 'Entrar'}
            </button>
          </form>

          <p className="text-xs text-ink-400 text-center mt-5">
            ¿Aún no tienes cuenta?{' '}
            <Link to="/registro" className="text-teal-600 font-semibold hover:underline">
              Crear cuenta
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
