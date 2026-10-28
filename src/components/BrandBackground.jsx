import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

// Marca de corte de imprenta para las esquinas de la pantalla
function CropMark({ className }) {
  return (
    <span aria-hidden className={`absolute w-4 h-4 ${className}`}>
      <span className="absolute top-1/2 left-0 w-full h-px bg-current" />
      <span className="absolute left-1/2 top-0 h-full w-px bg-current" />
    </span>
  );
}

// Fondo Señal / Ruido: brillos de señal + grilla wireframe + grano + marcas de corte
export default function BrandBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const signalY = useTransform(scrollYProgress, [0, 1], ['-20vh', '55vh']);
  const accentY = useTransform(scrollYProgress, [0, 1], ['70vh', '-5vh']);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Señal: brillos que se desplazan con el scroll */}
      <motion.div
        style={{ y: reduceMotion ? 0 : signalY }}
        className="absolute -left-[20vw] top-0 w-[65vw] max-w-[900px] aspect-square rounded-full bg-signal/10 dark:bg-signal/25 blur-[140px]"
      />
      <motion.div
        style={{ y: reduceMotion ? 0 : accentY }}
        className="absolute -right-[20vw] top-0 w-[55vw] max-w-[760px] aspect-square rounded-full bg-accent-light/[0.07] dark:bg-accent-dark/12 blur-[140px]"
      />

      {/* Grilla wireframe, visible en los bordes */}
      <div className="wire-grid absolute inset-0" />

      {/* Ruido */}
      <div className="grain absolute inset-0 opacity-25 dark:opacity-30" />

      {/* Marcas de corte */}
      <div className="hidden md:block text-text-light/30 dark:text-text-dark/25">
        <CropMark className="top-20 left-5" />
        <CropMark className="top-20 right-5" />
        <CropMark className="bottom-5 left-5" />
        <CropMark className="bottom-5 right-5" />
      </div>
    </div>
  );
}
