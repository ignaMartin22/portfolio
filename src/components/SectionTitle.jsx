import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function SectionTitle({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });

    return (
    <div className="flex justify-center">
      <motion.h2 ref={ref} className="relative inline-block isolate px-2">
        {/* Franja de papel roto que se pega al entrar en pantalla */}
        <motion.span
          aria-hidden
          className="torn absolute -left-1 -right-2 bottom-[10%] h-[42%] -z-10 origin-left -rotate-[1.5deg] bg-accent-light dark:bg-accent-dark"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="block font-display uppercase text-5xl md:text-6xl leading-[0.95] text-center text-balance text-text-light dark:text-text-dark">
          {children}
        </span>
      </motion.h2>
    </div>
  );
}
