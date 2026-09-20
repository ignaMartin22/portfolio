import { TbBolt, TbServer, TbCode, TbRocket } from 'react-icons/tb';

export const experiencias = [
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