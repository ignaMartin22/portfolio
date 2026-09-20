import {
  SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiAngular, SiExpress, SiSpring, SiTailwindcss, SiBootstrap,
  SiMongodb, SiMysql,
  SiDocker, SiRender, SiVercel,
  SiGit, SiGithub, SiPostman,
  SiClaude,
  SiVllm,
} from 'react-icons/si';

export const aboutData = {
  formacion: {
    label: 'Formación',
    type: 'list',
    items: [
      {
        title: 'Analista Programador Universitario',
        subtitle: 'Universidad Nacional de Jujuy — Facultad de Ingeniería',
        period: '2023 — 2026',
      },
      {
        title: 'Técnico en Equipos e Instalaciones Electromecánicas',
        subtitle: 'Escuela de Educación Técnica N° 1 "Escolástico Zegada" — Jujuy',
        period: '2017 — 2022',
      }
    ],
  },
  lenguajes: {
    label: 'Lenguajes',
    type: 'bubbles',
    items: [
      { title: 'JavaScript', icon: SiJavascript },
      { title: 'TypeScript', icon: SiTypescript },
      { title: 'HTML', icon: SiHtml5 },
      { title: 'CSS', icon: SiCss },
    ],
  },
  frameworks: {
    label: 'Frameworks',
    type: 'bubbles',
    items: [
      { title: 'React', icon: SiReact },
      { title: 'Angular', icon: SiAngular },
      { title: 'Express', icon: SiExpress },
      { title: 'Spring Boot', icon: SiSpring },
      { title: 'Tailwind', icon: SiTailwindcss },
      { title: 'Bootstrap', icon: SiBootstrap },
    ],
  },
  basesDeDatos: {
    label: 'Bases de datos',
    type: 'bubbles',
    items: [
      { title: 'MongoDB', icon: SiMongodb },
      { title: 'MySQL', icon: SiMysql },
    ],
  },
  devops: {
    label: 'DevOps',
    type: 'bubbles',
    items: [
      { title: 'Docker', icon: SiDocker },
      { title: 'Render', icon: SiRender },
      { title: 'Vercel', icon: SiVercel },
    ],

  ia:{
    label: 'Inteligencia Artificial',
    type: 'bubbles',
    items: [
      {title: 'Claude', icon: SiClaude},
      {title: 'Vllm', icon: SiVllm},
    ],
  }
  },
  herramientas: {
    label: 'Herramientas',
    type: 'bubbles',
    items: [
      { title: 'Git', icon: SiGit },
      { title: 'GitHub', icon: SiGithub },
      { title: 'Postman', icon: SiPostman },
    ],
  },
  diplomas: {
    label: 'Diplomas',
    type: 'list',
    items: [
      {
        title: 'EF SET English Certificate 60/100 (B2 Upper Intermediate)',
        subtitle: 'EF SET — 2026',
        url: 'https://cert.efset.org/en/hh53JV',
      },
    ],
  },
  idiomas:{
    label: 'Idiomas',
    type: 'list',
    items: [
      { title: 'Español', subtitle: 'Nativo' },
      { title: 'Inglés', subtitle: 'Intermedio - B2' },
    ],
  }
};