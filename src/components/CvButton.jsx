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
        className="btn-brand btn-primary mt-8 text-lg"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 backdrop-blur-sm px-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Tarjeta de papel pegada con cinta */}
            <motion.div
              initial={{ opacity: 0, y: 18, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              exit={{ opacity: 0, y: 12, rotate: 2 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md bg-paper text-ink shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            >
              <span aria-hidden className="absolute -top-3 left-[38%] w-24 h-6 rotate-[4deg] bg-highlight/75" />

              <div className="relative p-6 pt-7">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-light mb-2">
                      Download
                    </p>
                    <h3 className="font-display uppercase text-3xl leading-none">
                      {t('cv.downloadLabel')}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label={t('projects.close')}
                    onClick={() => setIsOpen(false)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink text-lg leading-none transition-colors hover:bg-ink hover:text-paper"
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
                      className="group flex items-center justify-between gap-3 border-2 border-ink px-4 py-3 text-left transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-accent-light)]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center bg-ink text-paper font-mono text-xs font-bold">
                          {code}
                        </span>
                        <div>
                          <p className="text-sm font-medium">
                            {t('cv.cta')}
                          </p>
                          <p className="font-mono text-[11px] text-ink/60">
                            {code === 'ES' ? t('cv.es') : t('cv.en')}
                          </p>
                        </div>
                      </div>

                      <span className="text-sm text-accent-light transition group-hover:translate-x-1">
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
