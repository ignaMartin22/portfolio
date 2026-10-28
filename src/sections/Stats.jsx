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
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-light dark:text-accent-dark mb-3 text-center">
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
                  group relative px-5 py-8 sm:py-10 text-left
                  bg-surface-light dark:bg-surface-dark
                  border-2 border-text-light/80 dark:border-text-secondary-dark/30
                  hover:-translate-x-0.5 hover:-translate-y-0.5
                  hover:shadow-[6px_6px_0_var(--color-accent-light)] dark:hover:shadow-[6px_6px_0_var(--color-accent-dark)]
                  transition-[transform,box-shadow] duration-200
                "
              >
                <p className="font-display text-6xl sm:text-7xl leading-none text-text-light dark:text-text-dark mb-4 transition-colors duration-200 group-hover:text-accent-light dark:group-hover:text-accent-dark">
                  <CountUp to={item.value} suffix={item.suffix} />
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] leading-snug text-text-secondary-light dark:text-text-secondary-dark">
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