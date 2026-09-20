import { motion } from 'motion/react';

export default function CvButton() {
  return (
    <a
      href="/Ignacio-Martin-CV.pdf"
      download
      className="
        inline-flex items-center gap-3 mt-6
        px-6 py-3 rounded-full
        bg-accent-light dark:bg-accent-dark
        text-white dark:text-bg-dark font-medium text-sm
        hover:-translate-y-0.5 hover:shadow-xl
        hover:shadow-accent-light/40 dark:hover:shadow-accent-dark/40
        active:translate-y-0 active:scale-95
        transition-all duration-300
        shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/20
      "
    >
      <motion.img
        src="/spider-icon.png"
        alt=""
        className="w-6 h-6 object-contain"
        animate={{ rotate: [0, 12, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
     Curriculum Vitae

    </a>
    
  );
}