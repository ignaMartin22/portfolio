import {
  SiAngular, SiCloudinary, SiExpo, SiExpress, SiJsonwebtokens, SiMongodb,
  SiNodedotjs, SiReact, SiRust, SiSolana, SiSolidity, SiSupabase, SiTailwindcss, SiTypescript, SiVercel,
} from 'react-icons/si';

const astroamImages = [
  '/astroam-img1.jpg',
  '/astroam-img2.jpg',
  '/astroam-img3.jpg',
];

const astroamTech = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Solana', icon: SiSolana },
  { name: 'Rust', icon: SiRust },
  { name: 'Solidity', icon: SiSolidity },
];

const es = [
  {
    name: 'AstroAm',
    tag: 'Web3 · Solana + Monad · Pagos en USDC · eSIM',
    highlight: 'Finalista · Hackatón Superteam Argentina (Solana)',
    description:
      'Datos móviles en cualquier país, pagados por MB en USDC. El viajero deposita USDC en un escrow on-chain e instala una eSIM; mientras navega, la app firma vales acumulativos sin una transacción por megabyte. Al terminar el viaje, una sola transacción cobra lo usado y devuelve el resto a la wallet. Lo desarrollamos en equipo sobre dos redes: Solana, para la hackatón de Superteam Argentina (comunidad del ecosistema Solana), donde llegamos a la final, y Monad, para Monad Metropolis 2026.',
    images: astroamImages,
    link: 'https://github.com/FrancoDuran23/astroam-solana',
    linkLabel: 'Repo Solana',
    extraLinks: [{ label: 'Repo Monad', url: 'https://github.com/FrancoDuran23/astroam-monad' }],
    coverNote: 'Web3 · Hackatón',
    tech: astroamTech,
    caseStudy: {
      problem:
        'Viajar al exterior implica pagar roaming caro o comprar paquetes de datos cerrados: pagás por gigas que no usás, necesitás tarjeta y lo que sobra se pierde.',
      solution:
        'Un canal de pago on-chain implementado en dos redes: el viajero deposita USDC en un escrow (no a nosotros), la operadora mide el consumo y la app firma vales acumulativos con una clave de sesión, sin popups de wallet ni transacciones por MB. Al cerrar el viaje, el escrow paga lo consumido y reembolsa el saldo. La app y el backend son los mismos; solo cambia la red de pago.',
      highlights: [
        'Solana: programa escrow nativo en Rust desplegado en devnet, con USDC de Circle, vales firmados con ed25519 y wallets Phantom / Solflare.',
        'Monad: contrato AstroAmEscrow en Solidity con vales EIP-712, tests en Foundry y desplegado en Monad testnet con MetaMask.',
        'Backend en Node/TypeScript con un PaymentRail agnóstico de la cadena, medición de consumo y política de corte cuando el depósito no alcanza.',
        'Frontend móvil en React + Vite + Tailwind con temática espacial, fondo de estrellas animado en Canvas y flujo completo: destino, depósito, eSIM, viaje y liquidación.',
      ],
      result:
        'La versión en Solana llegó a la final de la hackatón de Superteam Argentina. En ambas redes el flujo funciona de punta a punta, con la tarifa por país visible de entrada y el reembolso automático de lo que no se usa.',
    },
  },
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
];

const en = [
  {
    name: 'AstroAm',
    tag: 'Web3 · Solana + Monad · USDC payments · eSIM',
    highlight: 'Finalist · Superteam Argentina Hackathon (Solana)',
    description:
      'Mobile data in any country, paid per MB in USDC. The traveler deposits USDC into an on-chain escrow and installs one eSIM; while browsing, the app signs cumulative vouchers with no transaction per megabyte. When the trip ends, a single transaction pays for what was used and returns the rest to the wallet. We built it as a team on two networks: Solana, for the Superteam Argentina hackathon (a Solana ecosystem community), where we reached the final, and Monad, for Monad Metropolis 2026.',
    images: astroamImages,
    link: 'https://github.com/FrancoDuran23/astroam-solana',
    linkLabel: 'Repo Solana',
    extraLinks: [{ label: 'Repo Monad', url: 'https://github.com/FrancoDuran23/astroam-monad' }],
    coverNote: 'Web3 · Hackathon',
    tech: astroamTech,
    caseStudy: {
      problem:
        'Traveling abroad means paying expensive roaming or buying fixed data packages: you pay for gigabytes you never use, you need a card, and whatever is left is lost.',
      solution:
        'An on-chain payment channel implemented on two networks: the traveler deposits USDC into an escrow (not to us), the carrier meters usage and the app signs cumulative vouchers with a session key, with no wallet popups and no transaction per MB. When the trip closes, the escrow pays for what was used and refunds the rest. The app and backend are shared; only the payment network changes.',
      highlights: [
        'Solana: native escrow program in Rust deployed on devnet, with Circle USDC, ed25519-signed vouchers and Phantom / Solflare wallets.',
        'Monad: AstroAmEscrow contract in Solidity with EIP-712 vouchers, Foundry tests, deployed on Monad testnet with MetaMask.',
        'Node/TypeScript backend with a chain-agnostic PaymentRail, usage metering and a cutoff policy when the deposit runs out.',
        'Mobile-first React + Vite + Tailwind frontend with a space theme, an animated Canvas starfield and the full flow: destination, deposit, eSIM, trip and settlement.',
      ],
      result:
        'The Solana version reached the final of the Superteam Argentina hackathon. On both networks the flow works end to end, with each country\'s rate shown up front and an automatic refund of whatever goes unused.',
    },
  },
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
];

export const proyectos = { es, en };