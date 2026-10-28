import { motion, useScroll, useTransform } from 'motion/react';
import SpiderMark from './SpiderMark';

export default function SpideyScrollCompanion() {
  const { scrollYProgress } = useScroll();

  // A medida que scrollYProgress va de 0 a 1, la posición baja de 5vh a 85vh
  const top = useTransform(scrollYProgress, [0, 1], ['5vh', '85vh']);
  const percent = useTransform(scrollYProgress, (v) => `${String(Math.round(v * 100)).padStart(2, '0')}%`);

  return (
    <div className="fixed right-6 md:right-12 top-0 h-screen w-16 pointer-events-none z-40 hidden md:block">
      {/* Hilo de telaraña */}
      <motion.div
        style={{ height: top }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-text-light/50 dark:bg-paper/50"
      />

      {/* Araña de papel colgando, con leve balanceo */}
      <motion.div
        style={{ top }}
        className="absolute left-1/2 -translate-x-1/2 -mt-1 flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50% 0%' }}
        >
          <SpiderMark className="w-11 h-11 drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]" />
        </motion.div>
        {/* Progreso de scroll, como dato de terminal */}
        <motion.span className="mt-1 font-mono text-[10px] tabular-nums text-text-secondary-light dark:text-terminal">
          {percent}
        </motion.span>
      </motion.div>
    </div>
  );
}
