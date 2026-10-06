import { SiInstagram, SiX } from 'react-icons/si';
import { TbAffiliate, TbTrophy, TbUsersGroup, TbWorld } from 'react-icons/tb';

const images = ['/jujuydev-hackaton.jpg', '/jujuydev-img1.jpg', '/jujuydev-img2.jpg'];

const links = [
  { label: 'jujuy.dev.ar', url: 'https://jujuy.dev.ar/', icon: TbWorld },
  { label: 'Instagram', url: 'https://www.instagram.com/jujuy.dev/', icon: SiInstagram },
  { label: 'X', url: 'https://x.com/JujuyDevAr', icon: SiX },
];

const es = {
  kicker: 'Comunidad',
  title: 'Más allá del código',
  name: 'JujuyDev',
  tagline: 'El hub tech de Jujuy',
  role: 'Cofundador · Organizador',
  description:
    'Cofundé JujuyDev, la comunidad de programadores, desarrolladoras y emprendedores tech de San Salvador de Jujuy. Nació en septiembre de 2026 y ya reúne a más de 300 personas: encuentros gratuitos, abiertos a todos y sin nivel mínimo para participar.',
  stats: [
    { value: '300+', label: 'personas en la comunidad' },
    { value: '51', label: 'en el primer meetup' },
    { value: '77', label: 'en el Meet Up Tech #2' },
  ],
  highlights: [
    {
      icon: TbUsersGroup,
      text: 'Organización de meetups, charlas y talleres, presenciales y virtuales.',
    },
    {
      icon: TbAffiliate,
      text: 'Alianzas con Fundación CIDEJ, SaltaDev, Superteam Argentina y otras comunidades dev del país.',
    },
    {
      icon: TbTrophy,
      text: 'Llevamos la comunidad al mundo Web3: el Meet Up Tech #2 la preparó y el 3 de octubre organizamos en simultáneo las hackatones Monad Metropolis y Superteam Argentina.',
    },
  ],
  eventsLabel: 'Eventos',
  events: [
    { date: '3 oct', name: 'Hackatones Monad Metropolis + Superteam Argentina', detail: 'Jujuy · Organizadas en simultáneo por JujuyDev' },
    { date: '29 sep', name: 'Meet Up Tech #2', detail: 'Online · Hackatones, Web3 y becas · 77 personas' },
    { date: '17 sep', name: 'Cabildo Tech Jujuy', detail: 'Cabildo de Jujuy · Charla de Jorge Gronda (Umana) y workshop de IA' },
    { date: '3 sep', name: 'Meet Up #1', detail: 'Fundación CIDEJ · 51 personas' },
  ],
  images,
  links,
};

const en = {
  kicker: 'Community',
  title: 'Beyond the code',
  name: 'JujuyDev',
  tagline: 'The tech hub of Jujuy',
  role: 'Cofounder · Organizer',
  description:
    'I cofounded JujuyDev, the community of programmers, developers and tech entrepreneurs in San Salvador de Jujuy, Argentina. It started in September 2026 and already brings together more than 300 people: free events, open to everyone, no minimum level required.',
  stats: [
    { value: '300+', label: 'people in the community' },
    { value: '51', label: 'at the first meetup' },
    { value: '77', label: 'at Meet Up Tech #2' },
  ],
  highlights: [
    {
      icon: TbUsersGroup,
      text: 'Organizing meetups, talks and workshops, in person and online.',
    },
    {
      icon: TbAffiliate,
      text: 'Partnerships with Fundación CIDEJ, SaltaDev, Superteam Argentina and other dev communities across the country.',
    },
    {
      icon: TbTrophy,
      text: 'We brought the community into Web3: Meet Up Tech #2 got it ready, and on October 3 we hosted the Monad Metropolis and Superteam Argentina hackathons at the same time.',
    },
  ],
  eventsLabel: 'Events',
  events: [
    { date: 'Oct 3', name: 'Monad Metropolis + Superteam Argentina hackathons', detail: 'Jujuy · Hosted at the same time by JujuyDev' },
    { date: 'Sep 29', name: 'Meet Up Tech #2', detail: 'Online · Hackathons, Web3 and scholarships · 77 people' },
    { date: 'Sep 17', name: 'Cabildo Tech Jujuy', detail: 'Cabildo de Jujuy · Talk by Jorge Gronda (Umana) and an AI workshop' },
    { date: 'Sep 3', name: 'Meet Up #1', detail: 'Fundación CIDEJ · 51 people' },
  ],
  images,
  links,
};

export const comunidad = { es, en };
