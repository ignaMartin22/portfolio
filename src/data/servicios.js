import { TbCode, TbCurrencySolana, TbDeviceMobile, TbRobot } from 'react-icons/tb';

const es = [
  {
    icon: TbCode,
    title: 'Web apps',
    text: 'Aplicaciones web completas: frontend con React o Angular, backend con Node/Express o Spring Boot y bases de datos relacionales o NoSQL. De la idea al deploy.',
  },
  {
    icon: TbDeviceMobile,
    title: 'Apps móviles',
    text: 'Apps en React Native + Expo con Supabase: autenticación, datos y flujos móviles pensados para el uso diario el equipo o tus clientes.',
  },
  {
    icon: TbRobot,
    title: 'Automatización con IA',
    text: 'Agentes y flujos que eliminan tareas repetitivas: orquestación con modelos de Claude, generación de interfaces y optimización de procesos.',
  },
  {
    icon: TbCurrencySolana,
    title: 'Pagos Web3',
    text: 'Pagos en USDC sobre Solana y redes EVM como Monad: contratos escrow, conexión de wallets (MetaMask, Phantom) y firmas off-chain para cobrar por uso sin una transacción por operación.',
  },
];

const en = [
  {
    icon: TbCode,
    title: 'Web apps',
    text: 'Complete web applications: React or Angular frontends, Node/Express or Spring Boot backends and relational or NoSQL databases. From idea to deploy.',
  },
  {
    icon: TbDeviceMobile,
    title: 'Mobile apps',
    text: 'React Native + Expo apps backed by Supabase: authentication, data and mobile flows designed for your team\'s or your clients\' daily use.',
  },
  {
    icon: TbRobot,
    title: 'AI automation',
    text: 'Agents and flows that remove repetitive work: Claude model orchestration, interface generation and process optimization.',
  },
  {
    icon: TbCurrencySolana,
    title: 'Web3 payments',
    text: 'USDC payments on Solana and EVM networks like Monad: escrow contracts, wallet connection (MetaMask, Phantom) and off-chain signatures to charge per use without a transaction per operation.',
  },
];

export const servicios = { es, en };