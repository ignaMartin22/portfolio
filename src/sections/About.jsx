import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { aboutData } from '../data/about';
import Reveal from '../components/Reveal';
import TechBubble from '../components/TechBubble';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const [active, setActive] = useState('formacion');
  const categories = Object.keys(aboutData);

  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2 text-center">
            Conóceme
          </p>
          <div className="mb-4">
            <SectionTitle>Sobre mí</SectionTitle>
          </div>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-center max-w-2xl mx-auto mb-12">
            Soy Ignacio Martín, estudiante de Analista Programador en la UNJu
            y desarrollador Full-Stack. Me apasiona construir cosas que
            funcionen bien y se vean mejor — desde el backend hasta el último
            detalle de una animación.
          </p>
        </Reveal>

        {/* Botones de categorías */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`
                  relative px-5 py-2.5 rounded-full text-sm font-medium
                  border transition-colors duration-200
                  ${active === key
                    ? 'bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark border-transparent'
                    : 'bg-transparent text-text-secondary-light dark:text-text-secondary-dark border-text-secondary-light/20 dark:border-text-secondary-dark/20 hover:border-accent-light dark:hover:border-accent-dark'
                  }
                `}
              >
                {aboutData[key].label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Recuadro de contenido */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="
              relative rounded-2xl p-8
              bg-white/5 dark:bg-white/[0.03]
              backdrop-blur-md
              border border-accent-light/20 dark:border-accent-dark/20
            "
          >
            {/* Esquinas tipo circuito, detalle techno */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent-light dark:border-accent-dark rounded-tl-2xl" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent-light dark:border-accent-dark rounded-br-2xl" />

            {aboutData[active].type === 'bubbles' ? (
              <div className="flex flex-wrap justify-center gap-6">
                {aboutData[active].items.map((item) => (
                  <TechBubble key={item.title} icon={item.icon} title={item.title} />
                ))}
              </div>
            ) : (
              <ul className="space-y-5">
                {aboutData[active].items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <span className="text-text-light dark:text-text-dark font-medium">
                      {item.title}
                    </span>
                    {item.subtitle && (
                      <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                        {item.subtitle}
                      </span>
                    )}
                    {item.period && (
                      <span className="text-accent-light dark:text-accent-dark text-xs">
                        {item.period}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}