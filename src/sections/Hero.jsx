import { motion } from 'motion/react';
import { SiAngular, SiNodedotjs, SiReact } from 'react-icons/si';
import CvButton from '../components/CvButton';
import TornPortrait from '../components/TornPortrait';
import { useLanguage } from '../i18n/useLanguage';

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const floatingBadges = [
  { icon: SiReact, label: 'React', position: 'top-[18%] -left-2 md:-left-10', rotate: -4, duration: 5 },
  { icon: SiAngular, label: 'Angular', position: 'top-[58%] -left-4 md:-left-14', rotate: 3, duration: 6.5 },
  { icon: SiNodedotjs, label: 'Node', position: 'top-[66%] -right-2 md:-right-12', rotate: 5, duration: 5.5 },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden scroll-mt-24"
    >
      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-10 items-center px-8 pt-28 md:pt-28 pb-20 md:pb-0">
        {/* Retrato collage */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="relative w-[78vw] max-w-[340px] md:w-full md:max-w-[440px]">
            <TornPortrait />

            {/* Chips de stack */}
            {floatingBadges.map(({ icon: Icon, label, position, rotate, duration }) => (
              <motion.div
                key={label}
                style={{ rotate }}
                className={`
                  absolute ${position} hidden md:flex z-10
                  items-center gap-2 px-2.5 py-1.5
                  bg-bg-light dark:bg-bg-dark
                  border border-text-light/80 dark:border-terminal/70
                  shadow-[3px_3px_0_var(--color-accent-light)] dark:shadow-[3px_3px_0_var(--color-accent-dark)]
                `}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon className="w-3.5 h-3.5 text-text-light dark:text-terminal" />
                <span className="font-mono text-[11px] text-text-light dark:text-text-dark">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.18em] text-accent-light dark:text-accent-dark mb-4"
          >
            {t('hero.hello')}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-text-light dark:text-text-dark mb-6"
          >
            <span className="block">Ignacio</span>
            {/* Aire arriba para que no se corte la tilde de la Í */}
            <span className="relative inline-block isolate mt-[0.16em]">
              <span
                aria-hidden
                className="torn absolute -left-2 -right-3 bottom-[8%] h-[42%] -z-10 -rotate-[1.5deg] bg-accent-light dark:bg-accent-dark"
              />
              Martín
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            className="font-mono text-sm text-text-light dark:text-terminal mb-4"
          >
            {t('hero.role')}
          </motion.p>
          <motion.p
            variants={item}
            className="text-base text-text-secondary-light dark:text-text-secondary-dark max-w-md mx-auto md:mx-0"
          >
            {t('hero.pitch')}
          </motion.p>
          <motion.div variants={item}>
            <CvButton />
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark"
        aria-hidden
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{t('hero.scroll')}</span>
        <div className="w-px h-10 overflow-hidden bg-text-secondary-light/20 dark:bg-text-secondary-dark/20">
          <motion.span
            className="block w-full h-3 bg-accent-light dark:bg-accent-dark"
            animate={{ y: [-12, 40] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
