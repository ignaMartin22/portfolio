import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';

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
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious();
    if (!isOpen && latest > prev && latest > 140) setHidden(true);
    else setHidden(false);
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

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleSelect = (href) => {
    setIsOpen(false);
    setActive(href);
  };

  const isNavHidden = hidden && !isOpen;

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: isNavHidden ? -110 : 0, opacity: isNavHidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleSelect(link.href)}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-text-light dark:text-text-dark transition-colors duration-200"
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
          </div>

          {/* Botón hamburguesa móvil */}
          <button
            type="button"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 rounded-full text-text-light dark:text-text-dark hover:bg-white/15 dark:hover:bg-white/10 transition-colors duration-200"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="block w-5 h-[2px] rounded-full bg-current"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[2px] rounded-full bg-current"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="block w-5 h-[2px] rounded-full bg-current"
            />
          </button>
        </div>
      </motion.nav>

      {/* Overlay móvil: backdrop + menú */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 md:hidden bg-bg-dark/30 dark:bg-bg-dark/50 backdrop-blur-sm"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed left-4 right-4 top-[4.5rem] z-50 md:hidden rounded-3xl p-3 border border-white/20 dark:border-white/10 bg-white/15 dark:bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
            >
              <div className="flex flex-col">
                {links.map((link, i) => {
                  const isActive = active === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => handleSelect(link.href)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.25 }}
                      className={`
                        relative flex items-center justify-between px-5 py-3 min-h-[46px] rounded-2xl text-[15px] font-medium
                        transition-colors duration-200
                        ${
                          isActive
                            ? 'text-white dark:text-bg-dark'
                            : 'text-text-light dark:text-text-dark'
                        }
                      `}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="mobile-pill"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          className="absolute inset-0 rounded-2xl bg-accent-light dark:bg-accent-dark"
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                      <span className="relative z-10 text-xs font-mono text-accent-light dark:text-accent-dark opacity-70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}