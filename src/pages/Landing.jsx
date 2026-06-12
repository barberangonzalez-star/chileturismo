import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import ChatDemo from '../components/ChatDemo.jsx'

const PROBLEMAS = [
  { problema: 'Gestión manual de reservas', consecuencia: 'Pérdida de reservas y ventas' },
  { problema: 'Sin atención fuera del horario laboral', consecuencia: 'Baja tasa de ocupación' },
  { problema: 'Baja visibilidad ante turistas extranjeros', consecuencia: 'Comisiones elevadas a terceros' },
  { problema: 'Dependencia de intermediarios (OTAs)', consecuencia: 'Estancamiento y escaso crecimiento' },
  { problema: 'Sin métricas ni datos de sus clientes', consecuencia: 'Decisiones basadas en intuición' },
]

const MODULOS = [
  {
    nombre: 'Reservas',
    color: 'teal',
    descripcion: 'Agenda online, disponibilidad en tiempo real, confirmación automática y pagos integrados con Webpay y Mercado Pago.',
    beneficio: 'Elimina reservas perdidas y reduce el tiempo de gestión en 60%.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M4 5h16v15H4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M8.5 13.5l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    nombre: 'IA 24/7',
    color: 'coral',
    descripcion: 'Chatbot turístico en español e inglés, integrado a WhatsApp, que responde y recomienda tours sin horario.',
    beneficio: 'Captura turistas extranjeros y atiende cuando tu equipo duerme.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H9l-4 4v-4H6a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="12" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>
    ),
  },
  {
    nombre: 'Marketing',
    color: 'teal',
    descripcion: 'Publicaciones automáticas, diseño de campañas y calendario de contenido para tus redes.',
    beneficio: 'Mayor visibilidad sin contratar un community manager.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M4 11l13-7-4 16-3-6-6-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
    ),
  },
  {
    nombre: 'Analítica',
    color: 'coral',
    descripcion: 'Dashboard de ventas, perfil de tus clientes y proyección predictiva de demanda por temporada.',
    beneficio: 'Decisiones basadas en datos, no en intuición.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M4 20V10M11 20V4M18 20v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
    ),
  },
]

const PLANES = [
  {
    nombre: 'Básico',
    precio: '19.900',
    destacado: false,
    features: ['Módulo de reservas', 'Pagos integrados (Webpay / Mercado Pago)', 'Agenda y disponibilidad online'],
  },
  {
    nombre: 'Profesional',
    precio: '39.900',
    destacado: true,
    features: ['Todo lo del plan Básico', 'Chatbot IA 24/7 en WhatsApp', 'Marketing automatizado'],
  },
  {
    nombre: 'Premium',
    precio: '69.900',
    destacado: false,
    features: ['Todo lo del plan Profesional', 'Analítica avanzada', 'Predicción de demanda por temporada'],
  },
]

const FASES = [
  { etapa: 'Año 1 · Piloto', region: 'Valparaíso y Araucanía (Pucón, Villarrica, Lican Ray, Curarrehue, Caburgua)', meta: '15 clientes activos' },
  { etapa: 'Año 2', region: 'Los Ríos, Los Lagos, La Serena', meta: '100 clientes activos' },
  { etapa: 'Año 3', region: 'Expansión nacional', meta: '300+ clientes' },
]

function colorClasses(color) {
  return color === 'teal'
    ? { bg: 'bg-teal-50', icon: 'text-teal-600', ring: 'ring-teal-100' }
    : { bg: 'bg-coral-50', icon: 'text-coral-500', ring: 'ring-coral-100' }
}

export default function Landing() {
  const navigate = useNavigate()
  return (
    <div className="overflow-x-hidden">
      <NavBar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
            Hecho para microempresas turísticas de Chile
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.05] mt-5 text-ink-900">
            Tu agencia, atendiendo
            <br />
            <span className="text-coral-500">turistas</span> mientras duermes.
          </h1>
          <p className="mt-5 text-lg text-ink-600 max-w-md leading-relaxed">
            Reservas, atención 24/7 por WhatsApp en español e inglés, marketing y
            analítica — en una sola plataforma desde tu celular, por una fracción del costo
            de las herramientas separadas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/registro')}
              className="focus-ring bg-coral-500 hover:bg-coral-600 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-sm"
            >
              Crear cuenta gratis
            </button>
            <button
              onClick={() => navigate('/demo')}
              className="focus-ring bg-white hover:bg-ink-50 text-ink-900 font-semibold px-6 py-3 rounded-full border border-ink-900/10 transition-colors"
            >
              Ver demo del panel
            </button>
          </div>
          <p className="mt-6 text-sm text-ink-400">
            Desde $19.900/mes — hasta 10 veces más barato que alternativas como Bokun o TrekkSoft.
          </p>
        </div>
        <ChatDemo />
      </section>

      {/* Problema */}
      <section id="problema" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-3xl text-ink-900 text-center">
          15.000 operadores turísticos chilenos enfrentan la misma barrera
        </h2>
        <p className="text-center text-ink-600 mt-3 max-w-2xl mx-auto">
          Microempresas con recursos limitados que pierden ventas por falta de digitalización.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-900/5 bg-white">
          {PROBLEMAS.map((row, i) => (
            <div
              key={row.problema}
              className={`grid sm:grid-cols-2 gap-3 px-6 py-4 text-sm ${i !== PROBLEMAS.length - 1 ? 'border-b border-ink-900/5' : ''}`}
            >
              <p className="font-medium text-ink-800 flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-coral-500 shrink-0" />
                {row.problema}
              </p>
              <p className="text-ink-500 sm:text-right">{row.consecuencia}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modulos */}
      <section id="modulos" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-3xl text-ink-900 text-center">
          Cuatro módulos. Una sola plataforma.
        </h2>
        <p className="text-center text-ink-600 mt-3 max-w-2xl mx-auto">
          Lo que hoy pagas por separado en $150.000–$400.000 al mes, integrado en TurisIA.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {MODULOS.map((m) => {
            const c = colorClasses(m.color)
            return (
              <div key={m.nombre} className={`rounded-2xl p-6 bg-white border border-ink-900/5 ring-1 ring-transparent hover:${c.ring} transition-shadow`}>
                <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.icon} flex items-center justify-center`}>
                  {m.icon}
                </div>
                <h3 className="font-display font-semibold text-xl mt-4 text-ink-900">{m.nombre}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{m.descripcion}</p>
                <p className="mt-3 text-sm font-semibold text-ink-800">{m.beneficio}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-ink-900 text-white px-8 py-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl">Construida para el turismo chileno, no adaptada</h2>
            <p className="mt-4 text-ink-100/70 leading-relaxed">
              A diferencia de soluciones extranjeras como Bokun, Regiondo o TrekkSoft, TurisIA
              nace para la realidad de los operadores regionales de Chile.
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            {[
              'IA entrenada en turismo regional chileno y español chileno',
              'Integración nativa con WhatsApp, Webpay y Mercado Pago',
              'Traducción automática español/inglés para turismo receptivo',
              'Sistema predictivo de demanda por temporada',
              'Precio pensado para microempresas: desde $19.900/mes',
            ].map((d) => (
              <li key={d} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-3xl text-ink-900 text-center">Planes simples, sin sorpresas</h2>
        <p className="text-center text-ink-600 mt-3">Cancela cuando quieras. Sin contratos de permanencia.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {PLANES.map((plan) => (
            <div
              key={plan.nombre}
              className={`rounded-2xl p-7 flex flex-col ${
                plan.destacado
                  ? 'bg-ink-900 text-white ring-2 ring-coral-500 relative md:-translate-y-2 shadow-xl'
                  : 'bg-white border border-ink-900/5 text-ink-900'
              }`}
            >
              {plan.destacado && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Más elegido
                </span>
              )}
              <h3 className="font-display font-semibold text-lg">{plan.nombre}</h3>
              <p className="mt-3">
                <span className="text-3xl font-display font-extrabold">${plan.precio}</span>
                <span className={`text-sm ${plan.destacado ? 'text-ink-100/60' : 'text-ink-400'}`}> /mes</span>
              </p>
              <ul className="mt-5 space-y-2.5 text-sm flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${plan.destacado ? 'bg-teal-400' : 'bg-teal-500'}`} />
                    <span className={plan.destacado ? 'text-ink-100/85' : 'text-ink-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/registro')}
                className={`focus-ring mt-6 w-full rounded-full font-semibold py-2.5 transition-colors ${
                  plan.destacado
                    ? 'bg-coral-500 hover:bg-coral-600 text-white'
                    : 'bg-ink-50 hover:bg-ink-100 text-ink-900'
                }`}
              >
                Elegir {plan.nombre}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-ink-400 mt-6">
          Ingresos adicionales opcionales: capacitación y onboarding $150.000 · campañas digitales desde $80.000/mes · 1,5% por reserva procesada.
        </p>
      </section>

      {/* Expansion */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-3xl text-ink-900 text-center">De la Araucanía a todo Chile</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {FASES.map((f, i) => (
            <div key={f.etapa} className="rounded-2xl bg-white border border-ink-900/5 p-6">
              <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">{f.etapa}</span>
              <p className="mt-4 text-ink-800 font-medium leading-relaxed">{f.region}</p>
              <p className="mt-3 font-display font-bold text-xl text-coral-500">{f.meta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-teal-500 text-white px-8 py-14 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">Digitaliza tu operación turística hoy</h2>
          <p className="mt-3 text-teal-50/90 max-w-xl mx-auto">
            Crea tu cuenta y configura tu primer módulo en minutos. Sin tarjeta de crédito.
          </p>
          <button
            onClick={() => navigate('/registro')}
            className="focus-ring mt-7 bg-white text-teal-700 hover:bg-teal-50 font-semibold px-7 py-3 rounded-full transition-colors"
          >
            Crear cuenta gratis
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
