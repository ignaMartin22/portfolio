import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { useLanguage } from '../i18n/useLanguage';
import { stats } from '../data/stats';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';

const EASE = [0.22, 1, 0.36, 1];

function CountUp({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(() => (reduced ? to : 0));

  useEffect(() => {
    if (!inView || reduced) return undefined;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { lang, t } = useLanguage();
  const items = stats[lang];

  return (
    <section id="stats" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2 text-center">
            {t('stats.kicker')}
          </p>
          <div className="mb-4">
            <SectionTitle>{t('stats.title')}</SectionTitle>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
            {items.map((item) => (
              <div
                key={item.label}
                className="
                  group relative rounded-2xl px-6 py-10 text-center
                  bg-white/5 dark:bg-white/[0.03]
                  backdrop-blur-md
                  border border-text-secondary-light/15 dark:border-text-secondary-dark/15
                  hover:border-accent-light/50 dark:hover:border-accent-dark/50
                  transition-colors duration-300
                "
              >
                <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent-light dark:border-accent-dark rounded-tl-2xl group-hover:animate-pulse" />

                <p className="text-4xl sm:text-5xl font-black text-text-light dark:text-text-dark mb-3 transition-colors duration-300 group-hover:text-accent-light dark:group-hover:text-accent-dark">
                  <CountUp to={item.value} suffix={item.suffix} />
                </p>
                <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}