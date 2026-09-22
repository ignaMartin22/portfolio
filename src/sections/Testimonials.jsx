import { motion } from 'motion/react';
import { TbQuote } from 'react-icons/tb';
import { useLanguage } from '../i18n/useLanguage';
import { testimonios } from '../data/testimonios';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';

const EASE = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const { lang, t } = useLanguage();
  const items = testimonios[lang];

  return (
    <section id="testimonials" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2 text-center">
            {t('testimonials.kicker')}
          </p>
          <div className="mb-4">
            <SectionTitle>{t('testimonials.title')}</SectionTitle>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {items.map((testimonial, i) => (
            <motion.blockquote
              key={`${testimonial.name}-${lang}`}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -6 }}
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

              <motion.div
                aria-hidden
                className="absolute -top-3 right-6 w-11 h-11 rounded-full flex items-center justify-center border border-accent-light/25 dark:border-accent-dark/25 bg-bg-light dark:bg-bg-dark text-accent-light dark:text-accent-dark"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              >
                <TbQuote className="w-5 h-5" />
              </motion.div>

              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed mb-6 min-h-[84px]">
                “{testimonial.quote}”
              </p>

              <footer className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-accent-light/15 dark:bg-accent-dark/15 text-accent-light dark:text-accent-dark font-bold text-sm border border-accent-light/30 dark:border-accent-dark/30">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-text-light dark:text-text-dark font-medium text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}