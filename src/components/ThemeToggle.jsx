import { AnimatePresence, motion } from 'motion/react';
import { TbMoon, TbSun } from 'react-icons/tb';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle({ labelDark, labelLight }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? labelLight : labelDark}
      aria-pressed={isDark}
      className="
        w-11 h-11 rounded-full flex items-center justify-center
        text-text-light dark:text-text-dark
        hover:bg-white/15 dark:hover:bg-white/10
        transition-colors duration-200
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex"
        >
          {isDark ? <TbSun className="w-5 h-5" /> : <TbMoon className="w-5 h-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}