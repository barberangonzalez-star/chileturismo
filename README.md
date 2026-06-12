# TurisIA Chile — Demo Web App

Demo de landing + registro + panel de operador para TurisIA Chile, basada en la postulación
"Plataforma de IA para el Turismo Regional".

## Stack
- React 18 + Vite
- React Router (rutas: `/`, `/registro`, `/demo`)
- Tailwind CSS (paleta teal + coral basada en el logo)

## Desarrollo local
```bash
npm install
npm run dev
```

## Build de producción
```bash
npm run build
npm run preview
```

## Despliegue en Vercel
1. Sube este proyecto a un repositorio de GitHub.
2. En Vercel, "Add New Project" → importa el repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Como usa React Router con rutas anidadas, agrega un archivo `vercel.json` (incluido)
   para que `/registro` y `/demo` funcionen al recargar la página directamente.

## Páginas
- **`/` Landing**: hero con demo animada del chatbot de WhatsApp, problema/solución,
  los 4 módulos (Reservas, IA 24/7, Marketing, Analítica), diferenciadores, planes y CTA.
- **`/registro`**: formulario de alta de operador turístico (nombre, negocio, rubro, región, plan).
- **`/demo`**: panel interno con los 4 módulos en pestañas y datos de ejemplo
  ambientados en el piloto de Pucón/Villarrica.

## Personalización rápida
- Colores: `tailwind.config.js` (`teal` y `coral`).
- Tipografías: Sora (display) y Manrope (texto), cargadas en `index.html`.
- Copys y datos de ejemplo: dentro de cada archivo en `src/pages/`.
