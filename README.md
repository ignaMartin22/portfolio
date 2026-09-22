# Ignacio Martín — Portfolio

Portfolio personal de Ignacio Martín, Full-Stack Developer y AI Agent Orchestration.
Built with **React 19 + Vite + Tailwind CSS 4 + Motion**.

## Stack

- React 19, Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Motion (Framer Motion)
- react-icons

## Scripts

| Comando                | Descripción                                 |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                      |
| `npm run build`        | Build de producción a `dist/`               |
| `npm run preview`      | Previsualizar el build localmente           |
| `npm run lint`         | ESLint                                      |
| `npm run optimize:images` | Re-comprime las imágenes de `public/`   |

## Deploy a Vercel

1. Subí el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importá el repo.
3. Frameeworks presets: **Vite** (se detecta solo). No hace falta configurar nada.
4. Deploy. El `vercel.json` ya incluye el fallback SPA.

También podés deployar con la CLI:

```bash
vercel
```

## Funcionalidades

- **Modo oscuro / claro**: toggle en la navbar con persistencia en `localStorage`
  (`portfolio-theme`) y script inline en `index.html` para evitar el flash de tema.
- **i18n ES/EN**: toggle de idioma en la navbar, persistencia en `localStorage`
  (`portfolio-lang`) y todos los datos bilingües (`{ es, en }`).
- **Case studies**: cada proyecto con su modal (problema → solución → highlights →
  resultado), centrado en pantalla, con fondo transparente, botón de cierre, tecla
  `Escape` o clic/tap fuera del modal para salir.
- **Animaciones**: reveals al hacer scroll, contadores animados (Stats), glows en
  covers de proyectos y micro-interacciones de hover (Motion + `useReducedMotion`).

## Contenidos

- **Hero**: foto glassmorphism + grid tech.
- **Sobre mí**: formación, lenguajes, frameworks, DBs, DevOps, IA, herramientas, diplomas e idiomas (pestañas animadas).
- **Estadísticas**: métricas en números con contador animado.
- **Servicios**: lo que puedo aportar (web, apps móviles, automatización con IA).
- **Experiencia**: Khai (Freelance) y formación universitaria UNJu.
- **Proyectos**: PraxisApp (React Native + Expo + Supabase, con case study y link al repo), Tienda Khai Love (Angular + Node/Express + MongoDB) y proyecto de IA (React + Claude, "en desarrollo").
- **Testimonios**: clientes y colegas (textos de ejemplo a reemplazar).
- **Contacto**: intents que abren WhatsApp directo + GitHub/LinkedIn, CV en ES/EN.

## Estructura

```
src/
├── components/      # UI reutilizable (Navbar, ThemeToggle, LanguageToggle, CaseStudyModal, ...)
├── sections/        # Secciones de la página (Hero, Services, Stats, Testimonials, ...)
├── data/            # Datos bilingües { es, en } (proyectos, servicios, stats, testimonios, ...)
├── hooks/           # useTheme, useLanguage
├── i18n/            # LanguageProvider + diccionario de traducciones
└── index.css        # Tema claro/oscuro vía @custom-variant de Tailwind 4
```