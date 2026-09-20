import {
  SiAngular, SiBootstrap, SiDocker, SiExpo, SiExpress, SiGit, SiJavascript,
  SiMongodb, SiMysql, SiNodedotjs, SiPostman, SiReact, SiRender, SiSpring,
  SiSupabase, SiTailwindcss, SiTypescript, SiVercel,
} from 'react-icons/si';

const items = [
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiAngular, name: 'Angular' },
  { icon: SiReact, name: 'React' },
  { icon: SiReact, name: 'React Native' },
  { icon: SiExpo, name: 'Expo' },
  { icon: SiSupabase, name: 'Supabase' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiExpress, name: 'Express' },
  { icon: SiSpring, name: 'Spring Boot' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiBootstrap, name: 'Bootstrap' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiGit, name: 'Git' },
  { icon: SiVercel, name: 'Vercel' },
  { icon: SiRender, name: 'Render' },
  { icon: SiPostman, name: 'Postman' },
];

export default function TechMarquee() {
  const doubled = [...items, ...items];

  return (
    <div
      aria-hidden
      className="relative py-6 overflow-hidden border-y border-text-secondary-light/10 dark:border-text-secondary-dark/10"
    >
      <div className="flex w-max animate-marquee" style={{ animationDuration: '42s' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="
              inline-flex items-center gap-2 shrink-0 px-8
              text-sm text-text-secondary-light dark:text-text-secondary-dark
            "
          >
            <item.icon className="w-4 h-4" />
            {item.name}
            <span className="ml-8 w-1.5 h-1.5 rounded-full bg-accent-light/40 dark:bg-accent-dark/40" />
          </span>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-bg-light dark:from-bg-dark to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-bg-light dark:from-bg-dark to-transparent pointer-events-none" />
    </div>
  );
}