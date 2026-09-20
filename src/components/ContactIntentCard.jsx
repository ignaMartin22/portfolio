import { motion } from 'motion/react';
import { contactIntents } from '../data/contactIntents';

const WHATSAPP_NUMBER = '543884157277';

export default function ContactIntentCard() {
  const handleIntent = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative rounded-2xl p-5 sm:p-6 bg-white/5 dark:bg-white/[0.03] backdrop-blur-md border border-text-secondary-light/15 dark:border-text-secondary-dark/15">
      <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent-light dark:border-accent-dark rounded-tl-2xl" />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent-light dark:border-accent-dark rounded-br-2xl" />

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
              Abierto a oportunidades
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs uppercase tracking-wide">
            Tiempo de respuesta
          </p>
          <p className="text-text-light dark:text-text-dark text-sm font-medium">
            &lt; 1 hora
          </p>
        </div>
      </div>

      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4">
        ¿En qué puedo ayudarte?
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {contactIntents.map((intent) => (
          <button
            key={intent.label}
            onClick={() => handleIntent(intent.message)}
            className={`
              px-4 py-3 min-h-[46px] rounded-xl text-sm font-medium text-left
              border border-text-secondary-light/15 dark:border-text-secondary-dark/15
              text-text-light dark:text-text-dark
              hover:border-accent-light dark:hover:border-accent-dark
              hover:bg-accent-light/5 dark:hover:bg-accent-dark/5
              transition-colors duration-200
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