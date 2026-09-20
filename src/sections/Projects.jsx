import { motion } from 'motion/react';
import { TbHammer } from 'react-icons/tb';
import { proyectos } from '../data/proyectos';
import ProjectRow from '../components/ProjectRow';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
export default function Projects() {
  return (
<section id="projects" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-20 pb-4">
            <SectionTitle>Proyectos</SectionTitle>
          </div>
        </Reveal>

        <div className="space-y-16 md:space-y-24">
          {proyectos.map((project, i) => (
            <Reveal key={project.name} delay={0.1}>
              <ProjectRow project={project} reverse={i % 2 !== 0} index={i} />
            </Reveal>
          ))}

          {/* Próximamente */}
          <Reveal delay={0.15}>
            <div className="relative rounded-2xl border-2 border-dashed border-text-secondary-light/25 dark:border-text-secondary-dark/25 px-6 py-14 text-center overflow-hidden">
              {/* Esquinas techno */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-light dark:border-accent-dark rounded-tl-2xl" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-light dark:border-accent-dark rounded-br-2xl" />

              {/* Líneas discontinuas decorativas */}
              <span
                aria-hidden
                className="absolute top-8 left-1/2 -translate-x-1/2 w-28 h-px border-t-2 border-dotted border-text-secondary-light/25 dark:border-text-secondary-dark/25"
              />
              <span
                aria-hidden
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-28 h-px border-t-2 border-dotted border-text-secondary-light/25 dark:border-text-secondary-dark/25"
              />

              <div className="relative flex flex-col items-center gap-4">
                <div className="relative">
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 rounded-full border border-accent-light dark:border-accent-dark"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center border border-accent-light/25 dark:border-accent-dark/25 bg-accent-light/5 dark:bg-accent-dark/5">
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
                  <p className="text-accent-light dark:text-accent-dark text-xs uppercase tracking-[0.28em] font-medium mb-2">
                    Próximamente
                  </p>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                    Más proyectos en construcción
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-2 max-w-md mx-auto">
                    Estoy desarrollando nuevas ideas. Este espacio se va a ir
                    actualizando — volvé pronto.
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