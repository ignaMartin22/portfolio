import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('#hero');
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious();
    setHidden(latest > prev && latest > 140);
  });

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-1
        px-2 py-2 rounded-full
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl backdrop-saturate-150
        border border-white/20 dark:border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
      "
    >
      {links.map((link) => {
        const isActive = active === link.href;
        return (
          <a
            key={link.href}
            href={link.href}
            className="
              relative px-4 py-2 rounded-full text-sm font-medium
              text-text-light dark:text-text-dark
              transition-colors duration-200
            "
          >
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-white/20 dark:bg-white/10"
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </a>
        );
      })}
    </motion.nav>
  );
}