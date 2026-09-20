import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experiencias } from '../data/experiencia';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';

export default function Experience() {
  const [activeId, setActiveId] = useState(experiencias[0].id);
  const active = experiencias.find((e) => e.id === activeId);

  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2 text-center">
            Trayectoria
          </p>
          <div className="mb-4">
            <SectionTitle>Experiencia</SectionTitle>
          </div>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-center max-w-xl mx-auto mb-12">
            De la idea a producción: construyendo proyectos con mentalidad de
            producto real.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-[220px_1fr] gap-6">
            {/* Lista lateral */}
            <div className="flex flex-col gap-2">
              {experiencias.map((exp) => {
                  const isActive = activeId === exp.id;
                  return (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    relative w-full text-left
                    px-4 py-3 rounded-xl border transition-colors duration-200
                    ${
                      isActive
                        ? 'border-transparent'
                        : 'border-text-secondary-light/15 dark:border-text-secondary-dark/15 hover:border-accent-light/50 dark:hover:border-accent-dark/50'
                    }
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="exp-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-accent-light dark:bg-accent-dark"
                    />
                  )}
                  <p
                    className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-white dark:text-bg-dark'
                        : 'text-text-light dark:text-text-dark'
                    }`}
                  >
                    {exp.company}
                  </p>
                  <p
                    className={`relative z-10 text-xs transition-colors duration-200 ${
                      isActive
                        ? 'text-white/80 dark:text-bg-dark/80'
                        : 'text-text-secondary-light dark:text-text-secondary-dark'
                    }`}
                  >
                    {exp.period}
                  </p>
                </motion.button>
                  );
                })}
            </div>

            {/* Panel de detalle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl p-6 sm:p-8 bg-white/5 dark:bg-white/[0.03] backdrop-blur-md border border-accent-light/20 dark:border-accent-dark/20"
              >
                <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent-light dark:border-accent-dark rounded-tl-2xl" />
                <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent-light dark:border-accent-dark rounded-br-2xl" />

                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                    {active.role}
                  </h3>
                  <span className="shrink-0 text-xs px-3 py-1 rounded-full border border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark">
                    {active.period}
                  </span>
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4">
                  {active.tags.join(' · ')}
                </p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
                  {active.description}
                </p>

                <div className="space-y-4">
                  {active.highlights.map((h, i) => (
                    <div key={i} className="flex gap-3">
                      <h.icon className="w-5 h-5 text-accent-light dark:text-accent-dark shrink-0 mt-0.5" />
                      <div>
                        <p className="text-text-light dark:text-text-dark text-sm font-medium uppercase tracking-wide mb-1">
                          {h.title}
                        </p>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                          {h.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}