import { motion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({ children, delay = 0, distance = 40, blur = true, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance, filter: blur ? 'blur(10px)' : 'none' }}
      whileInView={{ opacity: 1, y: 0, filter: blur ? 'blur(0px)' : 'none' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}