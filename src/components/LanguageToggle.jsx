import { AnimatePresence, motion } from 'motion/react';
import { TbLanguage } from 'react-icons/tb';
import { useLanguage } from '../i18n/useLanguage';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const isEn = lang === 'en';

  return (
    <button
      type="button"
      onClick={() => setLang(isEn ? 'es' : 'en')}
      aria-label={isEn ? 'Cambiar idioma a español' : 'Switch language to English'}
      aria-pressed={isEn}
      title={isEn ? 'Español' : 'English'}
      className="
        relative w-11 h-11 rounded-full flex items-center justify-center gap-1.5
        text-text-light dark:text-text-dark
        hover:bg-white/15 dark:hover:bg-white/10
        transition-colors duration-200
      "
    >
      <TbLanguage className="w-[18px] h-[18px] hidden sm:block" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={lang}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="text-[11px] font-semibold tracking-wide"
        >
          {isEn ? 'EN' : 'ES'}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}