import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { aboutData } from '../data/about';
import Reveal from '../components/Reveal';
import TechBubble from '../components/TechBubble';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../i18n/useLanguage';

export default function About() {
  const { lang, t } = useLanguage();
  const data = aboutData[lang];
  const [active, setActive] = useState('formacion');
  const categories = Object.keys(data);

  return (
    <section id="about" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-light dark:text-accent-dark mb-3 text-center">
            {t('about.kicker')}
          </p>
          <div className="mb-4">
            <SectionTitle>{t('about.title')}</SectionTitle>
          </div>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-center max-w-2xl mx-auto mb-12">
            {t('about.intro')}
          </p>
        </Reveal>

        {/* Botones de categorías */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((key) => (
              <motion.button
                key={key}
                onClick={() => setActive(key)}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative px-4 py-2 font-mono text-xs uppercase tracking-[0.1em]
                  border-2 transition-colors duration-200
                  ${
                    active === key
                      ? 'text-paper border-transparent'
                      : 'bg-transparent text-text-light dark:text-text-dark border-text-light/30 dark:border-text-secondary-dark/30 hover:border-accent-light dark:hover:border-accent-dark'
                  }
                `}
              >
                {active === key && (
                  <motion.span
                    layoutId="about-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute -inset-[2px] bg-accent-light dark:bg-accent-dark shadow-[3px_3px_0_var(--color-ink)] dark:shadow-[3px_3px_0_var(--color-paper)]"
                  />
                )}
                <span className="relative z-10">{data[key].label}</span>
              </motion.button>
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
              relative p-6 sm:p-8
              bg-surface-light dark:bg-surface-dark
              border-2 border-text-light/80 dark:border-text-secondary-dark/30
              shadow-[6px_6px_0_var(--color-accent-light)] dark:shadow-[6px_6px_0_var(--color-accent-dark)]
            "
          >

            {data[active].type === 'bubbles' ? (
              <div className="flex flex-wrap justify-center gap-6">
                {data[active].items.map((item) => (
                  <TechBubble key={item.title} icon={item.icon} title={item.title} />
                ))}
              </div>
            ) : (
              <ul className="space-y-5">
                {data[active].items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1 pl-4 border-l-2 border-accent-light dark:border-accent-dark">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex flex-col gap-1 text-left transition-colors hover:text-accent-light dark:hover:text-accent-dark"
                      >
                        <span className="text-text-light dark:text-text-dark font-medium group-hover:text-accent-light dark:group-hover:text-accent-dark">
                          {item.title}
                        </span>
                        {item.subtitle && (
                          <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                            {item.subtitle}
                          </span>
                        )}
                        {item.period && (
                          <span className="font-mono text-[11px] text-accent-light dark:text-accent-dark">
                            {item.period}
                          </span>
                        )}
                      </a>
                    ) : (
                      <>
                        <span className="text-text-light dark:text-text-dark font-medium">
                          {item.title}
                        </span>
                        {item.subtitle && (
                          <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                            {item.subtitle}
                          </span>
                        )}
                        {item.period && (
                          <span className="font-mono text-[11px] text-accent-light dark:text-accent-dark">
                            {item.period}
                          </span>
                        )}
                      </>
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