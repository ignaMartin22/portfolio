import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { comunidad } from '../data/comunidad';
import ProjectCarousel from '../components/ProjectCarousel';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../i18n/useLanguage';

// Degradé del logo de JujuyDev (Hornocal: naranja → rosa → magenta → azul)
const JD_GRADIENT = 'from-[#ee8b3c] via-[#c0399c] to-[#3f7dd8]';

export default function Community() {
  const { lang } = useLanguage();
  const c = comunidad[lang];

  return (
    <section id="community" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-light dark:text-accent-dark mb-3 text-center">
            {c.kicker}
          </p>
          <div className="mb-12">
            <SectionTitle>{c.title}</SectionTitle>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Borde con el degradé de JujuyDev */}
          <div className={`relative p-[2px] bg-gradient-to-br ${JD_GRADIENT} shadow-[6px_6px_0_#c0399c]`}>
            <div className="relative overflow-hidden isolate bg-bg-light dark:bg-bg-dark p-6 sm:p-8 lg:p-10">
              <motion.div
                aria-hidden
                className="absolute -top-28 -right-24 w-80 h-80 rounded-full bg-[#c0399c]/15 blur-[100px] -z-10"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                aria-hidden
                className="absolute -bottom-28 -left-24 w-80 h-80 rounded-full bg-[#ee8b3c]/12 blur-[100px] -z-10"
                animate={{ scale: [1.15, 1, 1.15] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Fotos + eventos */}
                <div className="space-y-8">
                  {/* Fotos pegadas sobre papel */}
                  <div className="relative p-2.5 sm:p-3 -rotate-[1deg] bg-surface-light dark:bg-paper border border-ink/10 dark:border-transparent shadow-[0_18px_40px_rgba(11,11,16,0.25)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.5)]">
                    <span aria-hidden className="absolute -top-3 right-8 z-20 w-24 h-6 rotate-[4deg] bg-highlight/75" />
                    <ProjectCarousel images={c.images} alt={c.name} />
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-secondary-light dark:text-text-secondary-dark mb-3">
                      {c.eventsLabel}
                    </p>
                    <ol className="relative border-l-2 border-dashed border-text-secondary-light/30 dark:border-text-secondary-dark/30 ml-1.5 space-y-4">
                      {c.events.map((ev) => (
                        <li key={ev.name} className="pl-5 relative">
                          <span
                            aria-hidden
                            className={`absolute -left-[7px] top-1.5 w-3 h-3 rotate-45 bg-gradient-to-br ${JD_GRADIENT}`}
                          />
                          <p className="text-sm text-text-light dark:text-text-dark font-medium">
                            <span className="font-mono text-xs text-[#c0399c] dark:text-[#e86bb8] mr-2">{ev.date}</span>
                            {ev.name}
                          </p>
                          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-0.5">
                            {ev.detail}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <img src="/jujuydev-logo.svg" alt="" className="w-16 h-auto shrink-0" />
                    <div>
                      <h3 className="font-display uppercase text-4xl md:text-5xl leading-[0.95] text-text-light dark:text-text-dark">
                        {c.name}
                      </h3>
                      <p className="font-mono text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
                        {c.tagline}
                      </p>
                    </div>
                  </div>

                  <span className={`inline-flex items-center px-3 pt-1.5 pb-1 mb-6 -rotate-2 font-display uppercase text-base tracking-wide leading-none text-white bg-gradient-to-r ${JD_GRADIENT} shadow-[3px_3px_0_var(--color-ink)]`}>
                    {c.role}
                  </span>

                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
                    {c.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {c.stats.map((s) => (
                      <div
                        key={s.label}
                        className="p-3 text-center border-2 border-text-light/20 dark:border-text-secondary-dark/25 bg-surface-light dark:bg-surface-dark"
                      >
                        <p className={`font-display text-4xl leading-none bg-gradient-to-r ${JD_GRADIENT} bg-clip-text text-transparent`}>
                          {s.value}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.08em] leading-tight text-text-secondary-light dark:text-text-secondary-dark mt-2">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {c.highlights.map((h) => (
                      <li key={h.text} className="flex gap-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        <h.icon className="w-5 h-5 shrink-0 text-[#c0399c] dark:text-[#e86bb8]" />
                        {h.text}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    {c.links.map(({ label, url, icon: Icon }) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/jd btn-brand btn-ghost gap-2"
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                        <HiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/jd:translate-x-0.5 group-hover/jd:-translate-y-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
