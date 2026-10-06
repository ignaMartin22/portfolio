import {
  TbBolt, TbServer, TbCode, TbRocket, TbTrophy, TbWallet, TbFileCertificate,
} from 'react-icons/tb';

const es = [
  {
    id: 'astroam',
    company: 'AstroAm · Hackatones Web3',
    role: 'Full-Stack / Web3 Developer',
    period: '2026',
    theme: 'astroam',
    tags: ['Solana', 'Monad', 'USDC', 'Trabajo en equipo'],
    badge: 'Finalista · Superteam Argentina',
    description:
      'Participé en un equipo de 4 en dos hackatones Web3 con AstroAm, una app de datos móviles para viajeros que se paga por MB en USDC: la de Superteam Argentina, sobre Solana, donde llegamos a la final, y Monad Metropolis 2026, sobre Monad.',
    highlights: [
      {
        icon: TbFileCertificate,
        title: 'Smart contracts',
        text: 'En el contrato escrow de Monad (Solidity + Foundry) agregué claim, que cobra parte de un vale y deja el escrow abierto; regeneré la ABI y redesplegué la v2 en Monad testnet.',
      },
      {
        icon: TbWallet,
        title: 'Wallets y flujo de fondos',
        text: 'Conexión de wallets con MetaMask Connect (deeplink en el celular, extensión en escritorio), cancelación y reembolso de viajes pagos que nunca se activaron y la pantalla de reembolso en la wallet del viajero.',
      },
      {
        icon: TbTrophy,
        title: 'Un producto, dos redes',
        text: 'Un programa en Rust en Solana devnet y un contrato en Solidity en Monad, sobre un mismo backend en Node/TypeScript agnóstico de la cadena.',
      },
    ],
  },
  {
    id: 'khai',
    company: 'Khai',
    role: 'Full-Stack Developer',
    period: '2025 — 2026',
    tags: ['E-commerce', 'Freelance'],
    description:
      'Tienda de ropa desarrollada para un emprendimiento real, desde cero hasta producción.',
    highlights: [
      {
        icon: TbCode,
        title: 'Desarrollo full-stack',
        text: 'Catálogo de productos, panel de administración y autenticación con JWT, usando Angular, Node/Express y MongoDB Atlas.',
      },
      {
        icon: TbBolt,
        title: 'Flujo de pedidos',
        text: 'Integración del flujo de compra vía DM de Instagram, adaptado a cómo el negocio real recibe pedidos.',
      },
      {
        icon: TbServer,
        title: 'Infraestructura',
        text: 'Deploy en Vercel con Cloudinary para la gestión de imágenes de producto.',
      },
    ],
  },
  {
    id: 'formacion',
    company: 'UNJU - Facultad de Ingeniería',
    role: 'Analista Programador Universitario',
    period: '2023 — Presente',
    tags: ['Formación académica', 'Facultad de Ingeniería'],
    description:
      'Formación universitaria en análisis, diseño y desarrollo de software, combinando fundamentos teóricos con proyectos prácticos orientados a la resolución de problemas.',
    highlights: [
      {
        icon: TbRocket,
        title: 'Desarrollo aplicado',
        text:
          'Implementación de proyectos que integran análisis de requerimientos, diseño de soluciones, desarrollo de software y aplicación de buenas prácticas.',
      },
    ],
  },
];

const en = [
  {
    id: 'astroam',
    company: 'AstroAm · Web3 Hackathons',
    role: 'Full-Stack / Web3 Developer',
    period: '2026',
    theme: 'astroam',
    tags: ['Solana', 'Monad', 'USDC', 'Teamwork'],
    badge: 'Finalist · Superteam Argentina',
    description:
      'In a team of 4, I took part in two Web3 hackathons with AstroAm, a mobile data app for travelers paid per MB in USDC: Superteam Argentina, on Solana, where we reached the final, and Monad Metropolis 2026, on Monad.',
    highlights: [
      {
        icon: TbFileCertificate,
        title: 'Smart contracts',
        text: 'In the Monad escrow contract (Solidity + Foundry) I added claim, which collects part of a voucher and keeps the escrow open; I regenerated the ABI and redeployed v2 on Monad testnet.',
      },
      {
        icon: TbWallet,
        title: 'Wallets and fund flow',
        text: 'Wallet connection through MetaMask Connect (deeplink on mobile, extension on desktop), cancel and refund for paid trips that never activated, and the refund screen in the traveler wallet.',
      },
      {
        icon: TbTrophy,
        title: 'One product, two networks',
        text: 'A Rust program on Solana devnet and a Solidity contract on Monad, on top of the same chain-agnostic Node/TypeScript backend.',
      },
    ],
  },
  {
    id: 'khai',
    company: 'Khai',
    role: 'Full-Stack Developer',
    period: '2025 — 2026',
    tags: ['E-commerce', 'Freelance'],
    description:
      'An online store built for a real business, from scratch to production.',
    highlights: [
      {
        icon: TbCode,
        title: 'Full-stack development',
        text: 'Product catalog, admin panel and JWT authentication built with Angular, Node/Express and MongoDB Atlas.',
      },
      {
        icon: TbBolt,
        title: 'Order flow',
        text: 'Purchase flow integrated through Instagram DMs, adapted to how the real business receives orders.',
      },
      {
        icon: TbServer,
        title: 'Infrastructure',
        text: 'Deployed on Vercel with Cloudinary handling product images.',
      },
    ],
  },
  {
    id: 'formacion',
    company: 'UNJU - Faculty of Engineering',
    role: 'University Software Analyst',
    period: '2023 — Present',
    tags: ['Academic training', 'Faculty of Engineering'],
    description:
      'University training in software analysis, design and development, combining theoretical foundations with practical problem-solving projects.',
    highlights: [
      {
        icon: TbRocket,
        title: 'Applied development',
        text:
          'Projects that integrate requirements analysis, solution design, software development and good practices.',
      },
    ],
  },
];

export const experiencias = { es, en };