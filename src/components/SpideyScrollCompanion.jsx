import { motion, useScroll, useTransform } from 'motion/react';

export default function SpideyScrollCompanion() {
  const { scrollYProgress } = useScroll();

  // A medida que scrollYProgress va de 0 a 1, la posición baja de 5vh a 85vh
  const top = useTransform(scrollYProgress, [0, 1], ['5vh', '85vh']);

  return (
    <div className="fixed right-6 md:right-12 top-0 h-screen w-16 pointer-events-none z-40 hidden md:block">
      {/* Hilo de telaraña */}
      <motion.div
        style={{ height: top }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-text-secondary-light/40 dark:bg-text-secondary-dark/40"
      />

      {/* Ícono colgando, boca abajo, con leve balanceo */}
      <motion.img
        src="/spidey-icon.png"
        alt=""
        style={{ top }}
        animate={{ rotate: [178, 182, 178] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 -translate-x-1/2 w-10 h-10 object-contain drop-shadow-lg scale-y-[-1]"
      />
    </div>
  );
}