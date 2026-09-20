import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function SectionTitle({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-45% 0px -45% 0px' });

    return (
    <div className="flex justify-center">
      <motion.h2 ref={ref} className="relative inline-block px-2">
        <motion.span
          animate={{ scale: isInView ? 1.08 : 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`
            block text-3xl font-bold text-center transition-colors duration-300
            ${isInView
              ? 'text-accent-light dark:text-accent-dark'
              : 'text-text-light dark:text-text-dark'}
          `}
        >
          {children}
        </motion.span>

        <motion.span
          className="absolute -bottom-2 left-1/2 h-[3px] w-[calc(100%-16px)] rounded-full origin-center bg-gradient-to-r from-transparent via-accent-light dark:via-accent-dark to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: isInView ? 0.12 : 0 }}
        />
      </motion.h2>
    </div>
  );
}