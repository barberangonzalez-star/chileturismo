import { useEffect, useState } from 'react'

const SCRIPT = [
  { from: 'user', text: 'Hola! ¿Tienen tour al volcán Villarrica este sábado?', lang: 'es' },
  { from: 'bot', text: 'Hi! Yes — we have a spot for Saturday at 8:00 AM. Want me to book it for 2 people?', lang: 'en' },
  { from: 'user', text: 'Sí, para 2 personas por favor', lang: 'es' },
  { from: 'bot', text: 'Listo ✅ Reserva confirmada para 2. Te llegó el comprobante y el link de pago Webpay.', lang: 'es' },
]

export default function ChatDemo() {
  const [visible, setVisible] = useState(1)

  useEffect(() => {
    if (visible > SCRIPT.length) {
      const reset = setTimeout(() => setVisible(1), 2200)
      return () => clearTimeout(reset)
    }
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 1 ? 1200 : 1700)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      <div className="rounded-[2rem] border-[6px] border-ink-900 bg-white shadow-xl overflow-hidden">
        <div className="bg-teal-600 text-white px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-coral-400 flex items-center justify-center font-display font-bold text-xs">
            T
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">TurisIA · Asistente</p>
            <p className="text-[11px] text-teal-50/80 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-300 pulse-dot inline-block" />
              en línea — 24/7
            </p>
          </div>
        </div>
        <div className="bg-[#E9EFE9] px-3 py-4 flex flex-col gap-2 min-h-[300px]">
          {SCRIPT.slice(0, visible).map((m, i) => (
            <div
              key={i}
              className={`bubble-in max-w-[85%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm ${
                m.from === 'user'
                  ? 'self-end bg-coral-500 text-white rounded-br-sm'
                  : 'self-start bg-white text-ink-800 rounded-bl-sm'
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-3 py-2 border border-ink-900/5 text-xs font-semibold text-ink-800 hidden sm:block"
      >
        🌋 Tour Villarrica
        <span className="block text-[10px] font-normal text-ink-400">Reserva #1042 · confirmada</span>
      </div>
    </div>
  )
}
