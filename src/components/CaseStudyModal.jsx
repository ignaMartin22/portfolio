import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HiXMark } from 'react-icons/hi2';
import { useLanguage } from '../i18n/useLanguage';

function Block({ label, children }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.28em] text-accent-light dark:text-accent-dark mb-2">
        {label}
      </p>
      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!project?.caseStudy) return null;

  const { caseStudy } = project;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50"
        >
          <div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 bg-black/15 dark:bg-black/25"
          />

          <div className="relative h-full overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl rounded-3xl border border-white/20 dark:border-white/10 bg-white dark:bg-bg-dark shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-light/10 via-transparent to-transparent dark:from-accent-dark/10 pointer-events-none" />

                <div className="relative p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-accent-light dark:text-accent-dark mb-2">
                        {project.tag}
                      </p>
                      <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">
                        {project.name}
                      </h3>
                    </div>
                    <button
                      type="button"
                      aria-label={t('projects.close')}
                      onClick={onClose}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-text-secondary-light/25 dark:border-text-secondary-dark/25 bg-white/5 dark:bg-white/[0.03] text-text-secondary-light dark:text-text-secondary-dark transition hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark"
                    >
                      <HiXMark className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <Block label={t('caseModal.problem')}>{caseStudy.problem}</Block>
                    <Block label={t('caseModal.solution')}>{caseStudy.solution}</Block>

                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-accent-light dark:text-accent-dark mb-3">
                        {t('caseModal.highlights')}
                      </p>
                      <ul className="space-y-2.5">
                        {caseStudy.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-sm text-text-secondary-light dark:text-text-secondary-dark"
                          >
                            <span
                              aria-hidden
                              className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent-light dark:bg-accent-dark"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative rounded-xl border border-accent-light/25 dark:border-accent-dark/25 bg-white/5 dark:bg-white/[0.03] p-4">
                      <Block label={t('caseModal.result')}>{caseStudy.result}</Block>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map(({ name, icon: Icon }) => (
                        <span
                          key={name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-text-secondary-light/20 dark:border-text-secondary-dark/20 bg-white/5 dark:bg-white/[0.03] text-text-secondary-light dark:text-text-secondary-dark"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}