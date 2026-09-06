import { motion } from 'motion/react';
import CvButton from '../components/CvButton';
export default function Hero() {
  return (
    <section
      id="hero"
className="relative min-h-screen flex items-center overflow-hidden scroll-mt-24"    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center px-8 pt-24">
        {/* Foto con anillo spider-sense */}
        <div className="relative flex justify-center md:justify-start">
          <div className="relative w-[70vw] h-[70vw] max-w-[480px] max-h-[480px] md:w-[85%] md:h-auto md:aspect-square">
            {/* Anillos pulsantes */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent-light dark:border-accent-dark"
              animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-accent-light dark:border-accent-dark"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            />

            {/* Foto */}
            <img
              src="/foto-perfil.jpg"
              alt="Ignacio Martín"
              className="relative w-full h-full rounded-full object-cover border-4 border-white/40 dark:border-white/10 shadow-2xl"
            />
          </div>
        </div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}    
          className="text-center md:text-left"
        >
          <p className="text-accent-light dark:text-accent-dark font-medium mb-2">
            Hola, soy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Ignacio Martín
          </h1>
          <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
            Full-Stack Developer — construyo cosas con Angular, Node y React.
          </p>
          <CvButton/>
        </motion.div>
      </div>
    </section>
  );
}