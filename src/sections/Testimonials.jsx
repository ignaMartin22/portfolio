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
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-light dark:text-accent-dark mb-3 text-center">
            {t('testimonials.kicker')}
          </p>
          <div className="mb-4">
            <SectionTitle>{t('testimonials.title')}</SectionTitle>
          </div>
        </Reveal>

        <div className={`grid gap-6 mt-12 ${items.length > 1 ? 'md:grid-cols-2' : 'max-w-xl mx-auto'}`}>
          {items.map((testimonial, i) => (
            <motion.blockquote
              key={`${testimonial.name}-${lang}`}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -6, rotate: 0 }}
              style={{ rotate: i % 2 === 0 ? -1 : 1 }}
              className="
                group relative p-6 sm:p-8 pt-8 sm:pt-10
                bg-surface-light dark:bg-paper text-ink
                border border-ink/10 dark:border-transparent
                shadow-[0_18px_40px_rgba(11,11,16,0.2)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.5)]
              "
            >
              {/* Cinta */}
              <span
                aria-hidden
                className={`absolute -top-3 w-24 h-6 bg-highlight/75 ${i % 2 === 0 ? 'left-8 -rotate-[4deg]' : 'right-8 rotate-[4deg]'}`}
              />

              <TbQuote aria-hidden className="w-8 h-8 mb-3 text-accent-light" />

              <p className="text-ink/80 leading-relaxed mb-6 min-h-[84px]">
                “{testimonial.quote}”
              </p>

              <footer className="flex items-center gap-3 pt-4 border-t border-dashed border-ink/25">
                <div className="w-11 h-11 flex items-center justify-center bg-ink text-paper font-mono font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-display uppercase text-lg leading-none tracking-wide">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-[11px] text-ink/60 mt-1">
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