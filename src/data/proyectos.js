import {
  SiAngular, SiCloudinary, SiExpo, SiExpress, SiJsonwebtokens, SiLeaflet, SiMongodb, SiNasa, SiNextdotjs,
  SiNodedotjs, SiPostgresql, SiReact, SiRust, SiSolana, SiSolidity, SiSupabase, SiTailwindcss, SiTelegram,
  SiTypescript, SiVercel, SiVite,
} from 'react-icons/si';

const yakuImages = [
  '/yaku-portada.jpg',
  '/yaku-img1.jpg',
  '/yaku-img2.jpg',
  '/yaku-img3.jpg',
];

const yakuTech = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Vite', icon: SiVite },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Leaflet', icon: SiLeaflet },
  { name: 'NASA GIBS', icon: SiNasa },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Telegram', icon: SiTelegram },
  { name: 'Vercel', icon: SiVercel },
];

const vaultixImages = [
  '/vaultix-portada.jpg',
  '/vaultix-img1.jpg',
  '/vaultix-img2.jpg',
  '/vaultix-img3.jpg',
];

const vaultixTech = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Solana', icon: SiSolana },
  { name: 'Rust', icon: SiRust },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Vercel', icon: SiVercel },
];

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
    name: 'Vaultix',
    tag: 'Web3 · Solana · Escrow P2P · Pagos en USDC',
    description:
      'Un link de pago protegido para comprar y vender por Instagram, WhatsApp o Marketplace con alguien que no conocés. El comprador paga en USDC y la plata queda bloqueada en una bóveda on-chain: no la tiene ni el vendedor ni la plataforma. Se libera cuando el comprador confirma que le llegó, o sola al vencer el plazo de reclamo. Login con email o Google, sin jerga cripto y sin necesitar SOL para las comisiones de red.',
    images: vaultixImages,
    link: 'https://vaultixpay.vercel.app/',
    linkLabel: 'Ver demo',
    extraLinks: [
      { label: 'Repositorio', url: 'https://github.com/ignaMartin22/Vaultix' },
    ],
    coverNote: 'Web3 · Solana devnet',
    tech: vaultixTech,
    caseStudy: {
      problem:
        'En la compraventa entre particulares alguien tiene que confiar primero: si el comprador transfiere, se arriesga a no recibir nada; si el vendedor envía, se arriesga a un comprobante de transferencia falso, una estafa muy común en Argentina. Las alternativas son Mercado Libre, con comisiones altas, o encontrarse en persona.',
      solution:
        'Escrow P2P en Solana: el vendedor crea un link con producto, precio y plazos y lo comparte. El comprador paga y los fondos van a una vault propia de esa orden (PDA). Si el vendedor no despacha en 5 días, el comprador recupera todo; si nadie reclama dentro de 7 días del envío, el vendedor cobra solo. Ante un problema, el comprador abre una disputa con depósito de garantía y un árbitro decide reembolsar, liberar o dividir.',
      highlights: [
        'Programa en Rust + Anchor con máquina de estados completa (pago, envío, liberación, reembolso, disputa y resolución), aritmética checked y tests para cada transición y plazo vencido.',
        'Onboarding con Privy (email o Google con cuenta embebida, o Phantom/Solflare) y transacciones patrocinadas por un fee payer del backend: el usuario nunca ve una seed phrase ni necesita SOL.',
        'Backend con Next.js API routes + Supabase, indexado de eventos on-chain con webhook de Helius, cron que ejecuta liberaciones y reembolsos vencidos, y panel de administración de disputas.',
        'Links con Open Graph dinámico (foto, precio y sello "Pago protegido" en WhatsApp), referencia en pesos y UI mobile-first con hero en WebGPU.',
      ],
      result:
        'MVP funcionando de punta a punta en Solana devnet, con la plataforma sin custodiar fondos y cada operación verificable on-chain. Comisión del 1,5% solo cuando el vendedor cobra.',
    },
  },
  {
    name: 'Yaku',
    tag: 'Alertas tempranas · Datos satelitales · Mapa interactivo',
    highlight: 'Cursor Hackathon · a bordo del Tren Solar',
    description:
      'Alertas satelitales para el agua del norte jujeño. "Yaku" significa agua en quechua: la plataforma cruza datos satelitales y de modelos meteorológicos para mostrar un semáforo de riesgo por zona, con aludes en la Quebrada cuando sobra agua y sequía en la Puna cuando falta. Lo construimos en equipo de cinco durante la Cursor Hackathon, a bordo del Tren Solar de la Quebrada, el 22 de noviembre de 2026; yo me encargué del frontend.',
    images: yakuImages,
    link: 'https://hacka-tren-solar.vercel.app/',
    linkLabel: 'Ver demo',
    extraLinks: [
      { label: 'Repositorio', url: 'https://github.com/ignaMartin22/hacka-tren-solar' },
    ],
    coverNote: 'Hackatón · Hecho en un día',
    tech: yakuTech,
    caseStudy: {
      problem:
        'En la Quebrada de Humahuaca las lluvias fuertes sobre suelo saturado provocan aludes, como el de Volcán en enero de 2017; en la Puna el problema es el contrario, la sequía. La información existe (satélites, modelos meteorológicos) pero no llega a tiempo ni en un formato que un vecino o un municipio pueda usar.',
      solution:
        'Un semáforo de riesgo para 8 zonas: 6 de la Quebrada con riesgo de aludes y 2 de la Puna con riesgo de sequía. Cada nivel explica sus motivos, muestra la tendencia de los últimos 7 días y puede enviar avisos por Telegram. El NARANJA se envía automático; el ROJO solo cuando lo confirma una persona responsable desde la vista institucional.',
      highlights: [
        'Mi parte: el frontend completo en React + TypeScript + Tailwind, mobile first: mapa Leaflet con etiquetas que no se superponen y que sigue a la zona elegida, ficha de riesgo con motivos y estados de carga.',
        'Gráfico de tendencia de 7 días (lluvia y humedad del suelo con el nivel de cada día) y capa satelital de NASA GIBS con lluvia IMERG y vegetación NDVI.',
        'Modo Replay que reproduce día a día cómo habría subido el semáforo antes del alud de Volcán de 2017, página pública de suscripción por Telegram y vista institucional con confirmación del ROJO.',
        'Trabajo en paralelo con el backend: contratos de API propuestos con mocks para avanzar sin bloquearnos, y la integración final con routing por hash.',
      ],
      result:
        'Una plataforma funcionando, hoy publicada en Vercel, con datos reales de Open-Meteo, Replay de un evento histórico y avisos listos para Telegram. Parte de mi participación en la hackatón después de quedar entre los 30 mejores del prehackatón en Jujuy.',
    },
  },
  {
    name: 'AstroAm',
    tag: 'Web3 · Solana + Monad · Pagos en USDC · eSIM',
    highlight: 'Finalista · Hackatón Superteam Argentina (Solana)',
    description:
      'Datos móviles en cualquier país, pagados por MB en USDC. El viajero deposita USDC en un escrow on-chain e instala una eSIM; mientras navega, la app firma vales acumulativos sin una transacción por megabyte. Al terminar el viaje, una sola transacción cobra lo usado y devuelve el resto a la wallet. Lo desarrollamos en equipo sobre dos redes: Solana, para la hackatón de Superteam Argentina (comunidad del ecosistema Solana), donde llegamos a la final, y Monad, para Monad Metropolis 2026. Hoy el proyecto sigue y ya tiene la waitlist abierta para la beta privada.',
    images: astroamImages,
    link: 'https://astroam-solana.vercel.app/#waitlist',
    linkLabel: 'Sumate a la waitlist',
    extraLinks: [
      { label: 'Repo Solana', url: 'https://github.com/FrancoDuran23/astroam-solana' },
      { label: 'Repo Monad', url: 'https://github.com/FrancoDuran23/astroam-monad' },
    ],
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
    name: 'Vaultix',
    tag: 'Web3 · Solana · P2P escrow · USDC payments',
    description:
      'A protected payment link to buy and sell through Instagram, WhatsApp or Marketplace with someone you don\'t know. The buyer pays in USDC and the money is locked in an on-chain vault: neither the seller nor the platform holds it. It is released when the buyer confirms delivery, or automatically when the claim window expires. Sign in with email or Google, no crypto jargon and no SOL needed for network fees.',
    images: vaultixImages,
    link: 'https://vaultixpay.vercel.app/',
    linkLabel: 'View demo',
    extraLinks: [
      { label: 'Repository', url: 'https://github.com/ignaMartin22/Vaultix' },
    ],
    coverNote: 'Web3 · Solana devnet',
    tech: vaultixTech,
    caseStudy: {
      problem:
        'In peer-to-peer sales someone has to trust first: if the buyer pays first, they risk getting nothing; if the seller ships first, they risk a fake transfer receipt, a very common scam in Argentina. The alternatives are Mercado Libre, with high fees, or meeting in person.',
      solution:
        'P2P escrow on Solana: the seller creates a link with the product, price and deadlines and shares it. The buyer pays and the funds go into a vault owned by that order (PDA). If the seller doesn\'t ship within 5 days, the buyer gets everything back; if nobody files a claim within 7 days of shipping, the seller gets paid automatically. If something goes wrong, the buyer opens a dispute with a guarantee deposit and an arbiter decides to refund, release or split.',
      highlights: [
        'Rust + Anchor program with a full state machine (payment, shipping, release, refund, dispute and resolution), checked arithmetic and tests for every transition and expired deadline.',
        'Onboarding with Privy (email or Google with an embedded account, or Phantom/Solflare) and transactions sponsored by a backend fee payer: users never see a seed phrase or need SOL.',
        'Backend with Next.js API routes + Supabase, on-chain event indexing via a Helius webhook, a cron that executes expired releases and refunds, and a dispute admin panel.',
        'Links with dynamic Open Graph (photo, price and a "Protected payment" seal on WhatsApp), peso reference prices and a mobile-first UI with a WebGPU hero.',
      ],
      result:
        'An end-to-end working MVP on Solana devnet, with the platform never holding funds and every operation verifiable on-chain. A 1.5% fee, charged only when the seller gets paid.',
    },
  },
  {
    name: 'Yaku',
    tag: 'Early warnings · Satellite data · Interactive map',
    highlight: 'Cursor Hackathon · aboard the Tren Solar',
    description:
      'Satellite alerts for water in northern Jujuy, Argentina. "Yaku" means water in Quechua: the platform combines satellite and weather-model data into a risk traffic light per zone, with landslides in the Quebrada when there is too much water and drought in the Puna when there is too little. We built it as a team of five during the Cursor Hackathon, aboard the Tren Solar de la Quebrada, on November 22, 2026; I owned the frontend.',
    images: yakuImages,
    link: 'https://hacka-tren-solar.vercel.app/',
    linkLabel: 'View demo',
    extraLinks: [
      { label: 'Repository', url: 'https://github.com/ignaMartin22/hacka-tren-solar' },
    ],
    coverNote: 'Hackathon · Built in one day',
    tech: yakuTech,
    caseStudy: {
      problem:
        'In the Quebrada de Humahuaca, heavy rain on saturated soil causes landslides, like the one in Volcán in January 2017; in the Puna the problem is the opposite: drought. The data exists (satellites, weather models), but it doesn\'t arrive in time or in a form a resident or a town council can use.',
      solution:
        'A risk traffic light for 8 zones: 6 in the Quebrada with landslide risk and 2 in the Puna with drought risk. Each level explains its reasons, shows the last 7 days and can send warnings through Telegram. ORANGE is sent automatically; RED only when a responsible person confirms it from the institutional view.',
      highlights: [
        'My part: the whole frontend in React + TypeScript + Tailwind, mobile first: a Leaflet map with non-overlapping labels that follows the selected zone, a risk card with its reasons, and loading states.',
        '7-day trend chart (rain and soil moisture with each day\'s level) and a NASA GIBS satellite layer with IMERG rain and NDVI vegetation.',
        'Replay mode that plays back, day by day, how the traffic light would have risen before the 2017 Volcán landslide, a public Telegram subscription page and an institutional view to confirm RED alerts.',
        'Working in parallel with the backend: proposed API contracts with mocks so neither side was blocked, then the final integration with hash routing.',
      ],
      result:
        'A working platform, now live on Vercel, with real Open-Meteo data, a replay of a historical event and warnings ready for Telegram. Part of my run at the hackathon after placing in the top 30 of the Jujuy pre-hackathon.',
    },
  },
  {
    name: 'AstroAm',
    tag: 'Web3 · Solana + Monad · USDC payments · eSIM',
    highlight: 'Finalist · Superteam Argentina Hackathon (Solana)',
    description:
      'Mobile data in any country, paid per MB in USDC. The traveler deposits USDC into an on-chain escrow and installs one eSIM; while browsing, the app signs cumulative vouchers with no transaction per megabyte. When the trip ends, a single transaction pays for what was used and returns the rest to the wallet. We built it as a team on two networks: Solana, for the Superteam Argentina hackathon (a Solana ecosystem community), where we reached the final, and Monad, for Monad Metropolis 2026. The project keeps going and the waitlist for the private beta is now open.',
    images: astroamImages,
    link: 'https://astroam-solana.vercel.app/#waitlist',
    linkLabel: 'Join the waitlist',
    extraLinks: [
      { label: 'Solana repo', url: 'https://github.com/FrancoDuran23/astroam-solana' },
      { label: 'Monad repo', url: 'https://github.com/FrancoDuran23/astroam-monad' },
    ],
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