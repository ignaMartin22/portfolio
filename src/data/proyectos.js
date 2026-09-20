import {
  SiAngular, SiCloudinary, SiExpo, SiExpress, SiJsonwebtokens, SiMongodb,
  SiNodedotjs, SiReact, SiSupabase, SiTailwindcss, SiVercel,
} from 'react-icons/si';

export const proyectos = [
  {
    name: 'PraxisApp',
    tag: 'Gestión de expedientes · App móvil · Saas',
    description:
      'Aplicación móvil para estudios jurídicos que digitaliza la gestión de expedientes: seguimiento de causas, estados, plazos y movimientos de cada expediente en un solo lugar. Desarrollada para acompañar el trabajo diario de un estudio real de abogados.',
    images: [
      'Praxis_Logo.jpg',
      'PraxisApp-img2jpg.jpg',
      'PraxisApp-img3.jpg',
      'PraxisApp-img4.jpg',
    ],
    link: '#',
    tech: [
      { name: 'React Native', icon: SiReact },
      { name: 'Expo Go', icon: SiExpo },
      { name: 'Supabase', icon: SiSupabase },
    ],
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
  },
];