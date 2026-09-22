import { TbBolt, TbServer, TbCode, TbRocket } from 'react-icons/tb';

const es = [
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