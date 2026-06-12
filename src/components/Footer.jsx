import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-50 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="col-span-2">
          <Logo light />
          <p className="mt-4 text-sm text-ink-100/70 max-w-xs leading-relaxed">
            Plataforma de inteligencia artificial para que los operadores turísticos
            de Chile reserven, atiendan y vendan más, desde el celular.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3 text-white">Producto</h4>
          <ul className="space-y-2 text-sm text-ink-100/70">
            <li><a href="/#modulos" className="hover:text-white transition-colors">Módulos</a></li>
            <li><a href="/#precios" className="hover:text-white transition-colors">Precios</a></li>
            <li><a href="/demo" className="hover:text-white transition-colors">Demo interactiva</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3 text-white">Cobertura piloto</h4>
          <ul className="space-y-2 text-sm text-ink-100/70">
            <li>Viña del Mar &amp; Valparaíso</li>
            <li>Pucón &amp; Villarrica</li>
            <li>Lican Ray, Curarrehue, Caburgua</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-ink-100/50">
        © 2026 TurisIA Chile · Demo conceptual — Postulación Semilla Inicia Mujer / CORFO
      </div>
    </footer>
  )
}
