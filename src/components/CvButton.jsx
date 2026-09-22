import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../i18n/useLanguage';

const cvOptions = [
  {
    code: 'ES',
    href: '/IGNACIO_MARTIN_CV_ESP.pdf',
    download: 'Ignacio_Martin_CV_ES.pdf',
  },
  {
    code: 'EN',
    href: '/IGNACIO_MARTIN_CV_ENG.pdf',
    download: 'Ignacio_Martin_CV_EN.pdf',
  },
];

export default function CvButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="
          inline-flex items-center gap-3 mt-6
          px-6 py-3 rounded-full touch-manipulation
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
        {t('cv.cta')}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark/60 dark:bg-bg-dark/70 backdrop-blur-sm px-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/[0.04] backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-light/10 via-transparent to-accent-dark/10 dark:from-accent-light/10 dark:via-transparent dark:to-accent-dark/10" />

              <div className="relative p-6">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-accent-light dark:text-accent-dark mb-2">
                      Download
                    </p>
                    <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                      {t('cv.downloadLabel')}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label={t('projects.close')}
                    onClick={() => setIsOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 dark:border-white/10 bg-white/5 dark:bg-white/[0.03] text-text-secondary-light dark:text-text-secondary-dark transition hover:text-text-light dark:hover:text-text-dark"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-3">
                  {cvOptions.map(({ code, href, download }) => (
                    <a
                      key={code}
                      href={href}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-accent-light/20 dark:border-accent-dark/20 bg-white/5 dark:bg-white/[0.03] px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-light dark:hover:border-accent-dark hover:shadow-lg hover:shadow-accent-light/10 dark:hover:shadow-accent-dark/10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark text-sm font-semibold">
                          {code}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-text-light dark:text-text-dark">
                            {t('cv.cta')}
                          </p>
                          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                            {code === 'ES' ? t('cv.es') : t('cv.en')}
                          </p>
                        </div>
                      </div>

                      <span className="text-sm text-accent-light dark:text-accent-dark transition group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}