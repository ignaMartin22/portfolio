import { motion } from 'motion/react';
import { TbArrowUpRight } from 'react-icons/tb';
import { useLanguage } from '../i18n/useLanguage';
import { servicios } from '../data/servicios';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';

const EASE = [0.22, 1, 0.36, 1];

export default function Services() {
  const { lang, t } = useLanguage();
  const items = servicios[lang];

  return (
    <section id="services" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2 text-center">
            {t('services.kicker')}
          </p>
          <div className="mb-4">
            <SectionTitle>{t('services.title')}</SectionTitle>
          </div>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-center max-w-2xl mx-auto mb-12">
            {t('services.intro')}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -10 }}
              className="
                group relative rounded-2xl p-6 sm:p-8
                bg-white/5 dark:bg-white/[0.03]
                backdrop-blur-md
                border border-text-secondary-light/15 dark:border-text-secondary-dark/15
                hover:border-accent-light/50 dark:hover:border-accent-dark/50
                transition-colors duration-300
              "
            >
              <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent-light dark:border-accent-dark rounded-tl-2xl" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent-light dark:border-accent-dark rounded-br-2xl" />

              <div className="relative mb-6">
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-2xl bg-accent-light/15 dark:bg-accent-dark/15 blur-xl"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                />
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center border border-accent-light/25 dark:border-accent-dark/25 bg-accent-light/10 dark:bg-accent-dark/10">
                  <service.icon className="w-7 h-7 text-accent-light dark:text-accent-dark transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                {service.text}
              </p>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-accent-light dark:text-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {String(i + 1).padStart(2, '0')}
                <TbArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}