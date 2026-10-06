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
          <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2 text-center">
            {c.kicker}
          </p>
          <div className="mb-12">
            <SectionTitle>{c.title}</SectionTitle>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Borde con el degradé de JujuyDev */}
          <div className={`relative rounded-3xl p-px bg-gradient-to-br ${JD_GRADIENT}`}>
            <div className="relative rounded-3xl overflow-hidden isolate bg-bg-light dark:bg-bg-dark p-6 sm:p-8 lg:p-10">
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
                <div className="space-y-6">
                  <ProjectCarousel images={c.images} alt={c.name} />

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-text-secondary-light dark:text-text-secondary-dark mb-3">
                      {c.eventsLabel}
                    </p>
                    <ol className="relative border-l border-text-secondary-light/20 dark:border-text-secondary-dark/20 ml-1.5 space-y-4">
                      {c.events.map((ev) => (
                        <li key={ev.name} className="pl-5 relative">
                          <span
                            aria-hidden
                            className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br ${JD_GRADIENT}`}
                          />
                          <p className="text-sm text-text-light dark:text-text-dark font-medium">
                            <span className="text-[#c0399c] dark:text-[#e86bb8] mr-2">{ev.date}</span>
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
                      <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">
                        {c.name}
                      </h3>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        {c.tagline}
                      </p>
                    </div>
                  </div>

                  <span className={`inline-flex items-center px-3.5 py-1.5 mb-5 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r ${JD_GRADIENT} shadow-md shadow-[#c0399c]/25`}>
                    {c.role}
                  </span>

                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
                    {c.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {c.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl p-3 text-center border border-text-secondary-light/15 dark:border-text-secondary-dark/15 bg-white/5 dark:bg-white/[0.03]"
                      >
                        <p className={`text-2xl font-black bg-gradient-to-r ${JD_GRADIENT} bg-clip-text text-transparent`}>
                          {s.value}
                        </p>
                        <p className="text-[11px] leading-tight text-text-secondary-light dark:text-text-secondary-dark mt-1">
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

                  <div className="flex flex-wrap gap-3">
                    {c.links.map(({ label, url, icon: Icon }) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group/jd inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                          text-sm font-medium
                          border border-text-secondary-light/25 dark:border-text-secondary-dark/25
                          text-text-light dark:text-text-dark
                          hover:border-[#c0399c] hover:text-[#c0399c] dark:hover:text-[#e86bb8]
                          hover:-translate-y-0.5 active:scale-95
                          transition-all duration-300
                        "
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
