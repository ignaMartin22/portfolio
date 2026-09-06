import { TbBolt, TbServer, TbCode, TbRocket } from 'react-icons/tb';

export const experiencias = [
  {
    id: 'khai',
    company: 'Khai',
    role: 'Full-Stack Developer',
    period: '2025 — Presente',
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
    company: 'UNJu',
    role: 'Estudiante — Analista Programador',
    period: '20XX — Presente',
    tags: ['Formación', 'Facultad de Ingeniería'],
    description:
      'Formación universitaria enfocada en desarrollo de software, con proyectos aplicados en cada nivel.',
    highlights: [
      {
        icon: TbRocket,
        title: 'Proyectos aplicados',
        text: 'Prácticas y trabajos con foco en llevar la teoría a productos usables, no solo ejercicios académicos.',
      },
    ],
  },
];