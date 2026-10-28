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
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-light dark:text-accent-dark mb-3 text-center">
            {t('services.kicker')}
          </p>
          <div className="mb-4">
            <SectionTitle>{t('services.title')}</SectionTitle>
          </div>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-center max-w-2xl mx-auto mb-12">
            {t('services.intro')}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              whileHover={{ x: -3, y: -3 }}
              className="
                group relative p-6 sm:p-8
                bg-surface-light dark:bg-surface-dark
                border-2 border-text-light/80 dark:border-text-secondary-dark/30
                hover:border-text-light dark:hover:border-text-dark
                hover:shadow-[6px_6px_0_var(--color-accent-light)] dark:hover:shadow-[6px_6px_0_var(--color-accent-dark)]
                transition-[box-shadow,border-color] duration-200
              "
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-text-light dark:bg-ink border-2 border-text-light dark:border-terminal/60">
                  <service.icon className="w-7 h-7 text-bg-light dark:text-terminal transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="flex items-center gap-1 font-mono text-xs text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                  {String(i + 1).padStart(2, '0')}
                  <TbArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <h3 className="font-display uppercase text-2xl md:text-3xl leading-none text-text-light dark:text-text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}