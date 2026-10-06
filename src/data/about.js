import {
  SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiAngular, SiExpress, SiSpring, SiTailwindcss, SiBootstrap,
  SiMongodb, SiMysql,
  SiDocker, SiRender, SiVercel,
  SiGit, SiGithub, SiPostman,
  SiClaude,
  SiVllm,
  SiSolana, SiEthereum, SiSolidity, SiRust, SiCircle,
} from 'react-icons/si';
import { TbHammer, TbWallet } from 'react-icons/tb';

const web3Items = [
  { title: 'Solana', icon: SiSolana },
  { title: 'EVM / Monad', icon: SiEthereum },
  { title: 'Foundry', icon: TbHammer },
  { title: 'MetaMask · Phantom', icon: TbWallet },
  { title: 'USDC', icon: SiCircle },
];

const es = {
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
      { title: 'Solidity', icon: SiSolidity },
      { title: 'Rust', icon: SiRust },
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
  },
  ia: {
    label: 'Inteligencia Artificial',
    type: 'bubbles',
    items: [
      { title: 'Claude', icon: SiClaude },
      { title: 'Vllm', icon: SiVllm },
    ],
  },
  web3: {
    label: 'Web3',
    type: 'bubbles',
    items: web3Items,
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
  idiomas: {
    label: 'Idiomas',
    type: 'list',
    items: [
      { title: 'Español', subtitle: 'Nativo' },
      { title: 'Inglés', subtitle: 'Intermedio - B2' },
    ],
  },
};

const en = {
  formacion: {
    label: 'Education',
    type: 'list',
    items: [
      {
        title: 'University Software Analyst',
        subtitle: 'Universidad Nacional de Jujuy — Faculty of Engineering',
        period: '2023 — 2026',
      },
      {
        title: 'Technician in Electromechanical Equipment and Installations',
        subtitle: 'Escuela de Educación Técnica N° 1 "Escolástico Zegada" — Jujuy',
        period: '2017 — 2022',
      }
    ],
  },
  lenguajes: {
    label: 'Languages',
    type: 'bubbles',
    items: [
      { title: 'JavaScript', icon: SiJavascript },
      { title: 'TypeScript', icon: SiTypescript },
      { title: 'HTML', icon: SiHtml5 },
      { title: 'CSS', icon: SiCss },
      { title: 'Solidity', icon: SiSolidity },
      { title: 'Rust', icon: SiRust },
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
    label: 'Databases',
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
  },
  ia: {
    label: 'AI',
    type: 'bubbles',
    items: [
      { title: 'Claude', icon: SiClaude },
      { title: 'Vllm', icon: SiVllm },
    ],
  },
  web3: {
    label: 'Web3',
    type: 'bubbles',
    items: web3Items,
  },
  herramientas: {
    label: 'Tools',
    type: 'bubbles',
    items: [
      { title: 'Git', icon: SiGit },
      { title: 'GitHub', icon: SiGithub },
      { title: 'Postman', icon: SiPostman },
    ],
  },
  diplomas: {
    label: 'Certificates',
    type: 'list',
    items: [
      {
        title: 'EF SET English Certificate 60/100 (B2 Upper Intermediate)',
        subtitle: 'EF SET — 2026',
        url: 'https://cert.efset.org/en/hh53JV',
      },
    ],
  },
  idiomas: {
    label: 'Spoken languages',
    type: 'list',
    items: [
      { title: 'Spanish', subtitle: 'Native' },
      { title: 'English', subtitle: 'Intermediate - B2' },
    ],
  },
};

export const aboutData = { es, en };