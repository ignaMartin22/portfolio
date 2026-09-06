import {motion, useInView} from 'motion/react';
import { useRef } from 'react';

export default function SectionTitle ({children}){
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-45% 0px -45% 0px' });
    return (
    <motion.h2
      ref={ref}
      animate={{ scale: isInView ? 1.08 : 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`
        text-3xl font-bold text-center transition-colors duration-300
        ${isInView
          ? 'text-accent-light dark:text-accent-dark'
          : 'text-text-light dark:text-text-dark'}
      `}
    >
      {children}
    </motion.h2>
  );
}