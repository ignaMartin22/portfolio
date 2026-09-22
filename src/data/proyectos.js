import {
  SiAngular, SiClaude, SiCloudinary, SiExpo, SiExpress, SiJsonwebtokens, SiMongodb,
  SiNodedotjs, SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiVercel,
} from 'react-icons/si';

const es = [
  {
    name: 'PraxisApp',
    tag: 'Gestión de expedientes · App móvil · SaaS',
    description:
      'Aplicación móvil para estudios jurídicos que digitaliza la gestión de expedientes: seguimiento de causas, estados, plazos y movimientos de cada expediente en un solo lugar. Desarrollada para acompañar el trabajo diario de un estudio real de abogados.',
    images: [
      '/Praxis_Logo.jpg',
      '/PraxisApp-img2jpg.jpg',
      '/PraxisApp-img3.jpg',
      '/PraxisApp-img4.jpg',
    ],
    link: 'https://github.com/ignaMartin22/praxis-app',
    coverNote: 'App móvil · Repositorio privado',
    tech: [
      { name: 'React Native', icon: SiReact },
      { name: 'Expo Go', icon: SiExpo },
      { name: 'Supabase', icon: SiSupabase },
    ],
    caseStudy: {
      problem:
        'Los estudios jurídicos manejaban expedientes en papel y planillas sueltas: causas, plazos y movimientos dispersos, riesgo de pérdida de información y cero visibilidad del estado real de cada causa.',
      solution:
        'App móvil que digitaliza el ciclo completo del expediente: alta, estados, plazos y movimientos centralizados, para que el estudio consulte el estado de cada causa al instante desde el celular.',
      highlights: [
        'Modelo de datos con Supabase (autenticación + Postgres) para acceso seguro y sincronización.',
        'UI en React Native + Expo pensada para el uso diario del equipo.',
        'Flujo de trabajo alineado a cómo trabaja realmente el estudio.',
      ],
      result:
        'Un solo lugar con el estado completo de cada expediente: menos consultas manuales y mejor trazabilidad de plazos y movimientos.',
    },
  },
  {
    name: 'Tienda Khai Love',
    tag: 'Tienda de ropa · Web app',
    description:
      'Tienda de ropa desarrollada para un emprendimiento real. Catálogo de productos, panel de administración (categorías, productos, pedidos), autenticación con JWT y flujo de pedidos. Paleta crema/chocolate con tipografía Cormorant Garamond + Montserrat.',
    images: [
      '/tienda-khai-img1.jpg',
      '/tienda-khai-img2.jpg',
      '/tienda-khai-img3.jpg',
    ],
    link: 'https://khai-love.vercel.app',
    coverNote: 'E-commerce · Producción',
    tech: [
      { name: 'Angular', icon: SiAngular },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'JWT', icon: SiJsonwebtokens },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Cloudinary', icon: SiCloudinary },
      { name: 'Vercel', icon: SiVercel },
    ],
    caseStudy: {
      problem:
        'El emprendimiento vendía solo por Instagram sin catálogo ni panel: los pedidos se acumulaban en DMs y era imposible organizar stock, categorías y cambios de precios.',
      solution:
        'E-commerce con catálogo, panel de administración completo y autenticación JWT para gestionar categorías, productos y pedidos, integrado al flujo real de compra por DM.',
      highlights: [
        'Backend en Node/Express + MongoDB Atlas y subida de imágenes con Cloudinary.',
        'Identidad visual crema/chocolate (Cormorant Garamond + Montserrat).',
        'Deploy en Vercel y API en Render.',
      ],
      result:
        'El cliente gestiona su tienda de forma autónoma y recibe pedidos ordenados, listos para responder.',
    },
  },
  {
    name: 'React + Claude Agent',
    tag: 'AI Agent · Orquestación de IA',
    description:
      'Agente de IA que orquesta la construcción de interfaces React: interpreta el objetivo, planifica la arquitectura, genera componentes y refina el resultado. Un pipeline donde Claude coordina todo el proceso de desarrollo frontend.',
    images: [],
    link: '#',
    coverNote: 'IA · Pipeline de generación',
    tech: [
      { name: 'Claude', icon: SiClaude },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Vercel', icon: SiVercel },
    ],
    caseStudy: {
      problem:
        'Diseñar y construir interfaces React sólidas lleva horas de iteración: estructura de componentes, animaciones y consistencia visual se revisan una y otra vez. ¿Podía una IA orquestar ese proceso completo?',
      solution:
        'Agente que recibe el objetivo del usuario, divide la tarea en pasos (estructura, estilos, animaciones, revisión) y ejecuta cada paso guiado por Claude, entregando una UI funcional lista para desplegar.',
      highlights: [
        'Orquestación del pipeline: planificación → generación → refinamiento.',
        'Guías de UI/UX aplicadas automáticamente para mantener consistencia visual.',
        'Salida lista para Vite: componente o proyecto completo desde una sola descripción.',
      ],
      result:
        'El tiempo de prototipado se reduce de horas a minutos: una interfaz completa y de calidad a partir de una consigna.',
    },
  },
];

const en = [
  {
    name: 'PraxisApp',
    tag: 'Case management · Mobile app · SaaS',
    description:
      'Mobile app for law firms that digitizes case management: tracking of cases, statuses, deadlines and movements all in one place. Built to support the daily work of a real law firm.',
    images: [
      '/Praxis_Logo.jpg',
      '/PraxisApp-img2jpg.jpg',
      '/PraxisApp-img3.jpg',
      '/PraxisApp-img4.jpg',
    ],
    link: 'https://github.com/ignaMartin22/praxis-app',
    coverNote: 'Mobile app · Private repository',
    tech: [
      { name: 'React Native', icon: SiReact },
      { name: 'Expo Go', icon: SiExpo },
      { name: 'Supabase', icon: SiSupabase },
    ],
    caseStudy: {
      problem:
        'Law firms handled cases on paper and loose spreadsheets: scattered cases, deadlines and movements, risk of lost information and zero visibility into the real status of each case.',
      solution:
        'A mobile app that digitizes the whole case lifecycle: creation, statuses, deadlines and movements centralized, so the firm can check any case instantly from their phone.',
      highlights: [
        'Data layer with Supabase (auth + Postgres) for secure access and sync.',
        'React Native + Expo UI designed for daily team use.',
        'Workflow aligned with how the firm actually works.',
      ],
      result:
        'A single place with the full status of every case: fewer manual lookups and better traceability of deadlines and movements.',
    },
  },
  {
    name: 'Tienda Khai Love',
    tag: 'Clothing store · Web app',
    description:
      'An online clothing store built for a real business. Product catalog, admin panel (categories, products, orders), JWT authentication and order flow. Cream/chocolate palette with Cormorant Garamond + Montserrat typography.',
    images: [
      '/tienda-khai-img1.jpg',
      '/tienda-khai-img2.jpg',
      '/tienda-khai-img3.jpg',
    ],
    link: 'https://khai-love.vercel.app',
    coverNote: 'E-commerce · Production',
    tech: [
      { name: 'Angular', icon: SiAngular },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'JWT', icon: SiJsonwebtokens },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Cloudinary', icon: SiCloudinary },
      { name: 'Vercel', icon: SiVercel },
    ],
    caseStudy: {
      problem:
        'The business sold only through Instagram with no catalog or panel: orders piled up in DMs and it was impossible to organize stock, categories and price changes.',
      solution:
        'An e-commerce with a full admin panel and JWT authentication to manage categories, products and orders, integrated with the real DM-based purchase flow.',
      highlights: [
        'Node/Express backend + MongoDB Atlas and Cloudinary image uploads.',
        'Cream/chocolate visual identity (Cormorant Garamond + Montserrat).',
        'Deployed on Vercel with the API on Render.',
      ],
      result:
        'The client runs their store autonomously and receives tidy, ready-to-answer orders.',
    },
  },
  {
    name: 'React + Claude Agent',
    tag: 'AI Agent · Orchestration',
    description:
      'An AI agent that orchestrates the building of React interfaces: it interprets the goal, plans the architecture, generates components and refines the result. A pipeline where Claude coordinates the whole frontend development process.',
    images: [],
    link: '#',
    coverNote: 'AI · Generation pipeline',
    tech: [
      { name: 'Claude', icon: SiClaude },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Vercel', icon: SiVercel },
    ],
    caseStudy: {
      problem:
        'Designing and building solid React interfaces takes hours of iteration: component structure, animations and visual consistency get reviewed over and over. Could an AI orchestrate that whole process?',
      solution:
        'An agent that takes the user\'s goal, breaks the task into steps (structure, styles, animations, review) and runs each step guided by Claude, delivering a functional UI ready to deploy.',
      highlights: [
        'Pipeline orchestration: planning → generation → refinement.',
        'UI/UX guidelines applied automatically to keep visual consistency.',
        'Output ready for Vite: a component or a whole project from a single prompt.',
      ],
      result:
        'Prototyping time drops from hours to minutes: a complete, quality interface from one description.',
    },
  },
];

export const proyectos = { es, en };