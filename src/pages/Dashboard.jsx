import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

const TABS = [
  { id: 'reservas', label: 'Reservas', icon: '📅' },
  { id: 'chatbot', label: 'IA 24/7', icon: '💬' },
  { id: 'marketing', label: 'Marketing', icon: '📣' },
  { id: 'analitica', label: 'Analítica', icon: '📊' },
]

const RESERVAS = [
  { id: '#1042', tour: 'Ascenso volcán Villarrica', cliente: 'J. Smith (UK)', personas: 2, fecha: 'Sáb 14 jun · 08:00', estado: 'Confirmada' },
  { id: '#1041', tour: 'Trekking Ojos del Caburgua', cliente: 'F. Müller (DE)', personas: 4, fecha: 'Sáb 14 jun · 10:30', estado: 'Confirmada' },
  { id: '#1040', tour: 'Tour termas Curarrehue', cliente: 'P. Rojas (CL)', personas: 3, fecha: 'Vie 13 jun · 15:00', estado: 'Pendiente pago' },
  { id: '#1039', tour: 'Kayak Lican Ray', cliente: 'A. Dubois (FR)', personas: 2, fecha: 'Vie 13 jun · 09:00', estado: 'Confirmada' },
]

const CONVERSACIONES = [
  { nombre: 'J. Smith', idioma: 'EN', ultimo: 'Want me to book it for 2 people?', estado: 'Resuelto por IA' },
  { nombre: 'A. Dubois', idioma: 'FR→ES', ultimo: 'Merci! ¿A qué hora salimos?', estado: 'Resuelto por IA' },
  { nombre: 'P. Rojas', idioma: 'ES', ultimo: 'Quedo atento al link de pago', estado: 'Esperando pago' },
  { nombre: 'C. Lindqvist', idioma: 'EN', ultimo: 'Do you have tours tomorrow?', estado: 'Resuelto por IA' },
]

const POSTS = [
  { titulo: 'Atardecer en el lago Caburgua', red: 'Instagram', programado: 'Hoy · 19:00', estado: 'Programado' },
  { titulo: 'Promo 2x1 trekking de temporada', red: 'Facebook', programado: 'Mañana · 10:00', estado: 'Programado' },
  { titulo: 'Reseña de cliente: tour Villarrica', red: 'Instagram', programado: 'Jue 12 jun', estado: 'Publicado' },
]

export default function Dashboard() {
  const [tab, setTab] = useState('reservas')

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-60 flex-col border-r border-ink-900/5 bg-white px-4 py-6">
        <Link to="/" className="focus-ring rounded-lg px-1">
          <Logo size="sm" />
        </Link>
        <nav className="mt-8 flex flex-col gap-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`focus-ring flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors text-left ${
                tab === t.id ? 'bg-teal-50 text-teal-700' : 'text-ink-600 hover:bg-ink-50'
              }`}
            >
              <span className="text-base" aria-hidden="true">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto rounded-xl bg-ink-900 text-white p-4 text-xs leading-relaxed">
          <p className="font-display font-semibold text-sm mb-1">Tours Villarrica</p>
          Plan Profesional · piloto Araucanía
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="border-b border-ink-900/5 bg-white px-5 sm:px-8 py-4 flex items-center justify-between">
          <div className="md:hidden">
            <Logo size="sm" />
          </div>
          <h1 className="font-display font-semibold text-lg text-ink-900 hidden md:block">
            {TABS.find((t) => t.id === tab).label}
          </h1>
          <Link to="/" className="focus-ring text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors">
            Salir a la portada
          </Link>
        </header>

        {/* Mobile tabs */}
        <div className="md:hidden flex overflow-x-auto gap-2 px-5 py-3 border-b border-ink-900/5 bg-white">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`focus-ring shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                tab === t.id ? 'bg-teal-50 text-teal-700' : 'text-ink-600 bg-ink-50'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <main className="px-5 sm:px-8 py-7">
          {tab === 'reservas' && <Reservas />}
          {tab === 'chatbot' && <Chatbot />}
          {tab === 'marketing' && <Marketing />}
          {tab === 'analitica' && <Analitica />}
        </main>
      </div>
    </div>
  )
}

function StatCard({ label, value, accent }) {
  return (
    <div className="rounded-2xl bg-white border border-ink-900/5 p-5">
      <p className="text-xs font-medium text-ink-400 uppercase tracking-wide">{label}</p>
      <p className={`mt-2 font-display font-bold text-2xl ${accent || 'text-ink-900'}`}>{value}</p>
    </div>
  )
}

function EstadoPill({ estado }) {
  const ok = estado === 'Confirmada' || estado === 'Resuelto por IA' || estado === 'Publicado'
  const wait = estado === 'Pendiente pago' || estado === 'Esperando pago' || estado === 'Programado'
  const cls = ok
    ? 'bg-teal-50 text-teal-700'
    : wait
    ? 'bg-coral-50 text-coral-600'
    : 'bg-ink-50 text-ink-600'
  return <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cls}`}>{estado}</span>
}

function Reservas() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Reservas esta semana" value="38" accent="text-teal-600" />
        <StatCard label="Ocupación promedio" value="82%" />
        <StatCard label="Ingresos confirmados" value="$1.240.000" accent="text-coral-500" />
      </div>
      <div className="rounded-2xl bg-white border border-ink-900/5 overflow-hidden">
        <div className="px-5 py-4 border-b border-ink-900/5 flex items-center justify-between">
          <h2 className="font-display font-semibold text-ink-900">Próximas reservas</h2>
          <button className="focus-ring text-sm font-semibold text-teal-600 hover:underline">+ Nueva reserva</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-ink-400 text-xs uppercase tracking-wide">
                <th className="px-5 py-3 font-medium">ID</th>
                <th className="px-5 py-3 font-medium">Tour</th>
                <th className="px-5 py-3 font-medium">Cliente</th>
                <th className="px-5 py-3 font-medium">Personas</th>
                <th className="px-5 py-3 font-medium">Fecha</th>
                <th className="px-5 py-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {RESERVAS.map((r) => (
                <tr key={r.id} className="border-t border-ink-900/5">
                  <td className="px-5 py-3.5 font-medium text-ink-800">{r.id}</td>
                  <td className="px-5 py-3.5 text-ink-700">{r.tour}</td>
                  <td className="px-5 py-3.5 text-ink-500">{r.cliente}</td>
                  <td className="px-5 py-3.5 text-ink-500">{r.personas}</td>
                  <td className="px-5 py-3.5 text-ink-500">{r.fecha}</td>
                  <td className="px-5 py-3.5"><EstadoPill estado={r.estado} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function Chatbot() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Conversaciones hoy" value="24" accent="text-teal-600" />
        <StatCard label="Resueltas por IA" value="91%" />
        <StatCard label="Idiomas atendidos" value="ES · EN · FR" accent="text-coral-500" />
      </div>
      <div className="rounded-2xl bg-white border border-ink-900/5 overflow-hidden">
        <div className="px-5 py-4 border-b border-ink-900/5">
          <h2 className="font-display font-semibold text-ink-900">Conversaciones recientes en WhatsApp</h2>
        </div>
        <ul>
          {CONVERSACIONES.map((c, i) => (
            <li key={c.nombre} className={`px-5 py-4 flex items-center justify-between gap-4 ${i !== CONVERSACIONES.length - 1 ? 'border-b border-ink-900/5' : ''}`}>
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-coral-50 text-coral-600 flex items-center justify-center font-display font-bold text-sm shrink-0">
                  {c.nombre[0]}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-ink-800 text-sm">{c.nombre} <span className="text-ink-400 font-normal">· {c.idioma}</span></p>
                  <p className="text-sm text-ink-500 truncate max-w-xs">{c.ultimo}</p>
                </div>
              </div>
              <EstadoPill estado={c.estado} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Marketing() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Publicaciones este mes" value="16" accent="text-teal-600" />
        <StatCard label="Alcance estimado" value="12.4k" />
        <StatCard label="Campañas activas" value="2" accent="text-coral-500" />
      </div>
      <div className="rounded-2xl bg-white border border-ink-900/5 overflow-hidden">
        <div className="px-5 py-4 border-b border-ink-900/5 flex items-center justify-between">
          <h2 className="font-display font-semibold text-ink-900">Calendario de contenido</h2>
          <button className="focus-ring text-sm font-semibold text-teal-600 hover:underline">+ Programar publicación</button>
        </div>
        <ul>
          {POSTS.map((p, i) => (
            <li key={p.titulo} className={`px-5 py-4 flex items-center justify-between gap-4 ${i !== POSTS.length - 1 ? 'border-b border-ink-900/5' : ''}`}>
              <div>
                <p className="font-medium text-ink-800 text-sm">{p.titulo}</p>
                <p className="text-sm text-ink-500">{p.red} · {p.programado}</p>
              </div>
              <EstadoPill estado={p.estado} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Analitica() {
  const meses = [
    { m: 'Ene', v: 30 }, { m: 'Feb', v: 38 }, { m: 'Mar', v: 28 }, { m: 'Abr', v: 42 },
    { m: 'May', v: 55 }, { m: 'Jun', v: 64 }, { m: 'Jul*', v: 78 },
  ]
  const max = Math.max(...meses.map((d) => d.v))
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Clientes nuevos (mes)" value="46" accent="text-teal-600" />
        <StatCard label="Origen extranjero" value="58%" />
        <StatCard label="Demanda proyectada jul." value="+22%" accent="text-coral-500" />
      </div>
      <div className="rounded-2xl bg-white border border-ink-900/5 p-6">
        <h2 className="font-display font-semibold text-ink-900 mb-1">Reservas mensuales</h2>
        <p className="text-sm text-ink-400 mb-6">*Julio: proyección predictiva de demanda</p>
        <div className="flex items-end gap-3 sm:gap-5 h-48">
          {meses.map((d) => (
            <div key={d.m} className="flex-1 flex flex-col items-center gap-2">
              <div
                className={`w-full rounded-t-lg ${d.m === 'Jul*' ? 'bg-coral-300 border-2 border-dashed border-coral-500' : 'bg-teal-500'}`}
                style={{ height: `${(d.v / max) * 100}%` }}
              />
              <span className="text-xs text-ink-400">{d.m}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-white border border-ink-900/5 p-6">
        <h2 className="font-display font-semibold text-ink-900 mb-4">Perfil de clientes</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-ink-500 mb-2">Origen</p>
            {[
              ['Chile', 42], ['Europa', 35], ['Norteamérica', 16], ['Otros', 7],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-3 mb-2">
                <span className="w-24 text-ink-700">{k}</span>
                <div className="flex-1 h-2 rounded-full bg-ink-50 overflow-hidden">
                  <div className="h-full bg-teal-500" style={{ width: `${v}%` }} />
                </div>
                <span className="w-10 text-right text-ink-400">{v}%</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-ink-500 mb-2">Tours más reservados</p>
            {[
              ['Volcán Villarrica', 48], ['Ojos del Caburgua', 31], ['Termas Curarrehue', 21],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-3 mb-2">
                <span className="w-32 text-ink-700 truncate">{k}</span>
                <div className="flex-1 h-2 rounded-full bg-ink-50 overflow-hidden">
                  <div className="h-full bg-coral-500" style={{ width: `${v}%` }} />
                </div>
                <span className="w-10 text-right text-ink-400">{v}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
