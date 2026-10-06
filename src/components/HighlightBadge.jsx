import { motion } from 'motion/react';
import { HiTrophy } from 'react-icons/hi2';

export default function HighlightBadge({ children, className = '' }) {
  if (!children) return null;
  return (
    <span
      className={`
        relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full overflow-hidden
        text-xs font-semibold tracking-wide
        border border-amber-500/50 dark:border-amber-400/40
        bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100
        dark:from-amber-500/15 dark:via-yellow-400/10 dark:to-amber-500/15
        text-amber-800 dark:text-amber-300
        shadow-md shadow-amber-500/15 dark:shadow-amber-400/10
        ${className}
      `}
    >
      {/* Brillo que recorre el badge */}
      <motion.span
        aria-hidden
        className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/60 dark:via-white/15 to-transparent skew-x-[-20deg]"
        animate={{ x: ['0%', '400%'] }}
        transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
      />
      <HiTrophy className="relative w-4 h-4 text-amber-500 dark:text-amber-400" />
      <span className="relative">{children}</span>
    </span>
  );
}
