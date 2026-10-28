import { motion } from 'motion/react';
import { contactIntents } from '../data/contactIntents';
import { useLanguage } from '../i18n/useLanguage';

const WHATSAPP_NUMBER = '543884157277';

export default function ContactIntentCard() {
  const { lang, t } = useLanguage();
  const intents = contactIntents[lang];

  const handleIntent = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative p-5 sm:p-6 bg-surface-light dark:bg-surface-dark border border-text-secondary-light/20 dark:border-text-secondary-dark/20">
      <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent-light dark:border-accent-dark" />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent-light dark:border-accent-dark" />

      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <motion.span
              className="absolute inset-0 rounded-full border border-accent-light dark:border-accent-dark"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <img
              src="/foto-perfil.jpg"
              alt="Nacho Martín"
              className="relative w-12 h-12 rounded-full object-cover border-2 border-accent-light dark:border-accent-dark"
            />
          </div>
          <div>
            <p className="text-text-light dark:text-text-dark font-medium">
              Ignacio Martín
            </p>
            <p className="text-accent-light dark:text-accent-dark text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light dark:bg-accent-dark" />
              {t('card.openTo')}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs uppercase tracking-wide">
            {t('card.replyTime')}
          </p>
          <p className="text-text-light dark:text-text-dark text-sm font-medium">
            {t('card.withinHour')}
          </p>
        </div>
      </div>

      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4">
        {t('card.ask')}
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {intents.map((intent) => (
          <button
            key={intent.label}
            onClick={() => handleIntent(intent.message)}
            className={`
              px-4 py-3 min-h-[46px] text-sm font-medium text-left
              border-2 border-text-light/80 dark:border-text-dark/70
              text-text-light dark:text-text-dark
              hover:-translate-x-0.5 hover:-translate-y-0.5
              hover:border-accent-light dark:hover:border-accent-dark
              hover:shadow-[4px_4px_0_var(--color-accent-light)] dark:hover:shadow-[4px_4px_0_var(--color-accent-dark)]
              active:translate-x-0 active:translate-y-0 active:shadow-none
              transition-[transform,box-shadow,border-color] duration-150
              ${intent.full ? 'sm:col-span-2 text-center' : ''}
            `}
          >
            {intent.label}
          </button>
        ))}
      </div>
    </div>
  );
}