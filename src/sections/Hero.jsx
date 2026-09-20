import { motion } from 'motion/react';
import { SiAngular, SiNodedotjs, SiReact } from 'react-icons/si';
import CvButton from '../components/CvButton';

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
  { icon: SiReact, label: 'React', position: 'top-12 -right-2 md:-right-8', duration: 5 },
  { icon: SiAngular, label: 'Angular', position: 'top-1/2 -left-3 -translate-y-1/2 md:-left-10', duration: 6.5 },
  { icon: SiNodedotjs, label: 'Node', position: '-bottom-3 right-8 md:right-4', duration: 5.5 },
];

function Corner({ className }) {
  return (
    <span
      aria-hidden
      className={`absolute w-5 h-5 z-20 border-accent-light dark:border-accent-dark ${className}`}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden scroll-mt-24"
    >
      {/* Glows ambientales */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-accent-light/15 dark:bg-accent-dark/15 blur-[130px] pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, 70, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-accent-light/10 dark:bg-accent-dark/10 blur-[130px] pointer-events-none"
        animate={{ x: [0, -45, 0], y: [0, -50, 0], scale: [1.12, 1, 1.12] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-8 items-center px-8 pt-24 md:pt-28 pb-20 md:pb-0">
        {/* Tarjeta glassmorphism + grid tech */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="relative w-[72vw] max-w-[300px] md:w-[88%] md:max-w-[430px]">
            {/* Halo detrás de la tarjeta */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[2.5rem] bg-accent-light/20 dark:bg-accent-dark/20 blur-3xl pointer-events-none"
            />

            {/* Marco punteado perimetral */}
            <div
              aria-hidden
              className="absolute -inset-2 rounded-[1.4rem] border border-dashed border-accent-light/30 dark:border-accent-dark/30 pointer-events-none"
            />

            {/* Card de vidrio */}
            <div className="relative rounded-[1.1rem] overflow-hidden border border-white/25 dark:border-white/10 bg-white/15 dark:bg-white/[0.04] backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.28)]">

              {/* Barra superior de estado */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/15 dark:border-white/10 bg-white/5 dark:bg-white/[0.02]">
                <span className="flex items-center gap-2 text-[11px] text-text-light dark:text-text-dark">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-accent-light/60 dark:bg-accent-dark/60 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-light dark:bg-accent-dark" />
                  </span>
                  Disponible
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary-light dark:text-text-secondary-dark">
                  ING&nbsp;·&nbsp;DEV
                </span>
              </div>

              {/* Foto + red tecnológica */}
              <div className="relative aspect-square">
                <img
                  src="/ignacioMartin_red.jpeg"
                  alt="Ignacio Martín"
                  fetchPriority="high"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Grid overlay */}
                <div aria-hidden className="tech-grid absolute inset-0 opacity-80 pointer-events-none" />

                {/* Degradados para integrar la red con la foto */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-bg-light/40 dark:from-bg-dark/50 via-transparent to-transparent pointer-events-none"
                />

                {/* Línea de escaneo */}
                <motion.div
                  aria-hidden
                  className="absolute left-0 right-0 h-14 -top-3 z-10 pointer-events-none"
                  animate={{ y: ['-10%', '480%'] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', repeatDelay: 0.8 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-light/25 dark:via-accent-dark/25 to-transparent" />
                </motion.div>

                {/* Chips de datos */}
                <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-md bg-bg-light/50 dark:bg-bg-dark/60 backdrop-blur-md border border-white/20 dark:border-white/10 text-[10px] font-mono text-text-secondary-light dark:text-text-secondary-dark">
                  -23.3333°S · -65.3000°W
                </div>
                <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-md bg-bg-light/50 dark:bg-bg-dark/60 backdrop-blur-md border border-white/20 dark:border-white/10 text-[10px] font-mono text-accent-light dark:text-accent-dark">
                  Jujuy, AR
                </div>
              </div>

              {/* Barra inferior */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-white/15 dark:border-white/10 bg-white/5 dark:bg-white/[0.02]">
                <span className="flex items-center gap-2 text-[11px] text-text-secondary-light dark:text-text-secondary-dark">
                  <img src="/spider-icon.png" alt="" className="w-4 h-4 object-contain" />
                  ignacio.martin.js
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-text-secondary-light dark:text-text-secondary-dark">
                  full-stack
                </span>
              </div>

              {/* Esquinas techno */}
              <Corner className="top-0 left-0 border-t-2 border-l-2 rounded-tl-lg" />
              <Corner className="top-0 right-0 border-t-2 border-r-2 rounded-tr-lg" />
              <Corner className="bottom-0 left-0 border-b-2 border-l-2 rounded-bl-lg" />
              <Corner className="bottom-0 right-0 border-b-2 border-r-2 rounded-br-lg" />
            </div>

            {/* Badges flotantes */}
            {floatingBadges.map(({ icon: Icon, label, position, duration }) => (
              <motion.div
                key={label}
                className={`
                  absolute ${position} hidden md:flex
                  items-center gap-2 px-3 py-2 rounded-full
                  bg-white/10 dark:bg-white/5 backdrop-blur-xl
                  border border-white/20 dark:border-white/10
                  shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                `}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                <span className="text-xs font-medium text-text-light dark:text-text-dark">
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
            className="text-accent-light dark:text-accent-dark font-medium mb-2"
          >
            Hola! soy
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4"
          >
            Ignacio Martín
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-2"
          >
            Full-Stack Developer —  AI Agent Orchestration         </motion.p>
          <motion.p
            variants={item}
            className="text-sm text-text-secondary-light dark:text-text-secondary-dark max-w-md mx-auto md:mx-0"
          >
            Construyo sistemas eficientes y escalables, enfocados en resolver problemas reales, optimizar recursos y convertir ideas en software que genera valor.
 
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
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
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