import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import { supabase } from '../lib/supabaseClient.js'

const REGIONES = [
  'Valparaíso',
  'Araucanía',
  'Los Ríos',
  'Los Lagos',
  'Coquimbo',
  'Otra región',
]

const RUBROS = [
  'Agencia de turismo / tour operador',
  'Alojamiento (hostal, cabaña, apart-hotel)',
  'Guía turístico independiente',
  'Transporte turístico',
]

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    rubro: RUBROS[0],
    region: REGIONES[0],
    email: '',
    password: '',
    whatsapp: '',
    plan: 'Profesional',
  })
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          nombre: form.nombre,
          empresa: form.empresa,
          rubro: form.rubro,
          region: form.region,
          whatsapp: form.whatsapp,
          plan: form.plan,
        },
      },
    })
    setLoading(false)
    if (error) {
      setError(error.message)
      return
    }
    setEnviado(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-start w-full">
        <div className="md:pt-6">
          <span className="inline-flex text-xs font-semibold uppercase tracking-wide text-coral-600 bg-coral-50 px-3 py-1 rounded-full">
            Piloto regional 2026
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl mt-4 text-ink-900">
            Crea tu cuenta de operador
          </h1>
          <p className="mt-3 text-ink-600 leading-relaxed max-w-md">
            En menos de 5 minutos activas tu agenda de reservas y conectas tu WhatsApp
            al asistente de IA. Sin tarjeta de crédito para empezar.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-600">
            {[
              'Configura tu primer tour o servicio',
              'Conecta WhatsApp Business',
              'Activa pagos con Webpay o Mercado Pago',
            ].map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-display font-bold text-xs shrink-0">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-ink-900/5 p-7 shadow-sm">
          {enviado ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h2 className="font-display font-bold text-2xl mt-5 text-ink-900">¡Cuenta creada!</h2>
              <p className="mt-2 text-ink-600 text-sm max-w-xs mx-auto">
                Bienvenido/a, {form.nombre.split(' ')[0] || 'operador'}. Revisa tu correo para
                confirmar tu cuenta y luego inicia sesión para entrar a tu panel.
              </p>
              <button
                onClick={() => navigate('/login')}
                className="focus-ring mt-6 bg-coral-500 hover:bg-coral-600 text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Ir a iniciar sesión
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre completo">
                  <input
                    required
                    value={form.nombre}
                    onChange={(e) => update('nombre', e.target.value)}
                    className="focus-ring w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm outline-none"
                    placeholder="Ej: María Pérez"
                  />
                </Field>
                <Field label="Nombre del negocio">
                  <input
                    required
                    value={form.empresa}
                    onChange={(e) => update('empresa', e.target.value)}
                    className="focus-ring w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm outline-none"
                    placeholder="Ej: Tours Villarrica"
                  />
                </Field>
              </div>

              <Field label="Tipo de negocio">
                <select
                  value={form.rubro}
                  onChange={(e) => update('rubro', e.target.value)}
                  className="focus-ring w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm outline-none bg-white"
                >
                  {RUBROS.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Región">
                  <select
                    value={form.region}
                    onChange={(e) => update('region', e.target.value)}
                    className="focus-ring w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm outline-none bg-white"
                  >
                    {REGIONES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field label="WhatsApp del negocio">
                  <input
                    required
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => update('whatsapp', e.target.value)}
                    className="focus-ring w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm outline-none"
                    placeholder="+56 9 1234 5678"
                  />
                </Field>
              </div>

              <Field label="Correo electrónico">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="focus-ring w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm outline-none"
                  placeholder="tu@negocio.cl"
                />
              </Field>

              <Field label="Contraseña">
                <input
                  required
                  type="password"
                  minLength={6}
                  value={form.password}
                  onChange={(e) => update('password', e.target.value)}
                  className="focus-ring w-full rounded-xl border border-ink-900/10 px-3.5 py-2.5 text-sm outline-none"
                  placeholder="Mínimo 6 caracteres"
                />
              </Field>

              <Field label="Plan">
                <div className="grid grid-cols-3 gap-2">
                  {['Básico', 'Profesional', 'Premium'].map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => update('plan', p)}
                      className={`focus-ring rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${
                        form.plan === p
                          ? 'border-coral-500 bg-coral-50 text-coral-600'
                          : 'border-ink-900/10 text-ink-600 hover:border-ink-900/20'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </Field>

              {error && (
                <p className="text-sm text-coral-600 bg-coral-50 rounded-xl px-3.5 py-2.5">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="focus-ring w-full bg-coral-500 hover:bg-coral-600 disabled:opacity-60 text-white font-semibold py-3 rounded-full transition-colors mt-2"
              >
                {loading ? 'Creando cuenta…' : 'Crear cuenta'}
              </button>
              <p className="text-xs text-ink-400 text-center">
                Ya tienes cuenta?{' '}
                <Link to="/login" className="text-teal-600 font-semibold hover:underline">
                  Iniciar sesión
                </Link>
              </p>
            </form>
          )}
        </div>
      </main>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink-800 mb-1.5">{label}</span>
      {children}
    </label>
  )
}
