import { motion } from 'motion/react';
import { TbHammer } from 'react-icons/tb';
import { proyectos } from '../data/proyectos';
import ProjectRow from '../components/ProjectRow';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../i18n/useLanguage';

export default function Projects() {
  const { lang, t } = useLanguage();
  const items = proyectos[lang];

  return (
<section id="projects" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-20 pb-4">
            <SectionTitle>{t('projects.title')}</SectionTitle>
          </div>
        </Reveal>

        <div className="space-y-16 md:space-y-24">
          {items.map((project, i) => (
            <Reveal key={project.name} delay={0.1}>
              <ProjectRow project={project} reverse={i % 2 !== 0} index={i} />
            </Reveal>
          ))}

          {/* Próximamente */}
          <Reveal delay={0.15}>
            <div className="relative border-2 border-dashed border-text-secondary-light/40 dark:border-text-secondary-dark/40 px-6 py-14 text-center overflow-hidden">
              {/* Scanlines CRT */}
              <span
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-60 bg-[repeating-linear-gradient(0deg,color-mix(in_srgb,var(--color-terminal)_10%,transparent)_0_1px,transparent_1px_4px)]"
              />

              <div className="relative flex flex-col items-center gap-4">
                <div className="relative">
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 border border-accent-light dark:border-accent-dark"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative w-14 h-14 flex items-center justify-center border-2 border-accent-light dark:border-accent-dark bg-bg-light dark:bg-bg-dark">
                    <motion.span
                      animate={{ rotate: [0, -12, 12, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex"
                    >
                      <TbHammer className="w-6 h-6 text-accent-light dark:text-accent-dark" />
                    </motion.span>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-light dark:text-accent-dark mb-3">
                    {t('projects.soon.kicker')}
                  </p>
                  <h3 className="font-display uppercase text-3xl leading-none text-text-light dark:text-text-dark">
                    {t('projects.soon.title')}
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-2 max-w-md mx-auto">
                    {t('projects.soon.text')}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}