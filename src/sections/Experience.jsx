import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experiencias } from '../data/experiencia';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import HighlightBadge from '../components/HighlightBadge';
import { useLanguage } from '../i18n/useLanguage';

// Paleta del branding de AstroAm
const ASTRO_ACCENTS = ['text-[#2FD0DD]', 'text-[#FDDA24]', 'text-[#9B82FF]'];
const ASTRO_CHIPS = [
  'border-[#6A45FF]/60 bg-[#6A45FF]/15 text-[#C9BDFF]',
  'border-[#2FD0DD]/50 bg-[#2FD0DD]/10 text-[#2FD0DD]',
  'border-[#FDDA24]/50 bg-[#FDDA24]/10 text-[#FDDA24]',
];
const STARS = [
  [8, 14, 1], [22, 70, 1.5], [35, 30, 1], [48, 88, 1], [61, 12, 1.5],
  [74, 56, 1], [86, 24, 1], [93, 78, 1.5], [15, 92, 1], [56, 44, 1],
];

function DefaultPanel({ exp }) {
  return (
    <div className="relative rounded-2xl p-6 sm:p-8 bg-white/5 dark:bg-white/[0.03] backdrop-blur-md border border-accent-light/20 dark:border-accent-dark/20">
      <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent-light dark:border-accent-dark rounded-tl-2xl" />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent-light dark:border-accent-dark rounded-br-2xl" />

      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
          {exp.role}
        </h3>
        <span className="shrink-0 text-xs px-3 py-1 rounded-full border border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark">
          {exp.period}
        </span>
      </div>
      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4">
        {exp.tags.join(' · ')}
      </p>
      <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
        {exp.description}
      </p>

      <div className="space-y-4">
        {exp.highlights.map((h, i) => (
          <div key={i} className="flex gap-3">
            <h.icon className="w-5 h-5 text-accent-light dark:text-accent-dark shrink-0 mt-0.5" />
            <div>
              <p className="text-text-light dark:text-text-dark text-sm font-medium uppercase tracking-wide mb-1">
                {h.title}
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                {h.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AstroamPanel({ exp }) {
  return (
    <div className="relative rounded-2xl p-6 sm:p-8 overflow-hidden isolate bg-[#070814] border border-[#6A45FF]/50 shadow-[0_20px_60px_-20px_rgba(106,69,255,0.55)]">
      {/* Fondo espacial: glows + estrellas */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-[#6A45FF]/35 blur-[90px] -z-10"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-[#2FD0DD]/20 blur-[90px] -z-10"
        animate={{ x: [0, -25, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      {STARS.map(([x, y, r], i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute rounded-full bg-white -z-10"
          style={{ left: `${x}%`, top: `${y}%`, width: r * 2, height: r * 2 }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 2.5 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#FDDA24] rounded-tl-2xl" />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#2FD0DD] rounded-br-2xl" />

      {/* El panel siempre es oscuro: el badge usa su variante dark */}
      {exp.badge && (
        <div className="dark">
          <HighlightBadge className="mb-4">{exp.badge}</HighlightBadge>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-1">
        <h3 className="text-xl font-bold text-[#F3F1FF]">{exp.role}</h3>
        <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full border border-[#FDDA24]/70 text-[#FDDA24]">
          {exp.period}
        </span>
      </div>
      <p className="text-sm font-semibold mb-4 bg-gradient-to-r from-[#9B82FF] via-[#2FD0DD] to-[#FDDA24] bg-clip-text text-transparent">
        {exp.company}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {exp.tags.map((tag, i) => (
          <span
            key={tag}
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${ASTRO_CHIPS[i % ASTRO_CHIPS.length]}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-[#A6A3C9] mb-6">{exp.description}</p>

      <div className="space-y-4">
        {exp.highlights.map((h, i) => (
          <div key={i} className="flex gap-3">
            <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border border-[#272A55] bg-[#0C0D22]">
              <h.icon className={`w-[18px] h-[18px] ${ASTRO_ACCENTS[i % ASTRO_ACCENTS.length]}`} />
            </span>
            <div>
              <p className="text-[#F3F1FF] text-sm font-medium uppercase tracking-wide mb-1">
                {h.title}
              </p>
              <p className="text-[#A6A3C9] text-sm">{h.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const { lang, t } = useLanguage();
  const items = experiencias[lang];
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find((e) => e.id === activeId);

  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2 text-center">
            {t('experience.kicker')}
          </p>
          <div className="mb-4">
            <SectionTitle>{t('experience.title')}</SectionTitle>
          </div>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-center max-w-xl mx-auto mb-12">
            {t('experience.intro')}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-[220px_1fr] gap-6">
            {/* Lista lateral */}
            <div className="flex flex-col gap-2">
              {items.map((exp) => {
                const isActive = activeId === exp.id;
                const isAstro = exp.theme === 'astroam';
                return (
                  <motion.button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    whileTap={{ scale: 0.97 }}
                    className={`
                      relative w-full text-left
                      px-4 py-3 rounded-xl border transition-colors duration-200
                      ${
                        isActive
                          ? 'border-transparent'
                          : isAstro
                            ? 'border-[#6A45FF]/45 hover:border-[#2FD0DD]/70'
                            : 'border-text-secondary-light/15 dark:border-text-secondary-dark/15 hover:border-accent-light/50 dark:hover:border-accent-dark/50'
                      }
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="exp-pill"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        className={`absolute inset-0 rounded-xl ${
                          isAstro
                            ? 'bg-gradient-to-r from-[#6A45FF] to-[#2FD0DD] shadow-lg shadow-[#6A45FF]/30'
                            : 'bg-accent-light dark:bg-accent-dark'
                        }`}
                      />
                    )}
                    <p
                      className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? isAstro ? 'text-white' : 'text-white dark:text-bg-dark'
                          : 'text-text-light dark:text-text-dark'
                      }`}
                    >
                      {isAstro && (
                        <span
                          aria-hidden
                          className={`inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle ${
                            isActive ? 'bg-[#FDDA24]' : 'bg-[#6A45FF]'
                          }`}
                        />
                      )}
                      {exp.company}
                    </p>
                    <p
                      className={`relative z-10 text-xs transition-colors duration-200 ${
                        isActive
                          ? isAstro ? 'text-white/85' : 'text-white/80 dark:text-bg-dark/80'
                          : 'text-text-secondary-light dark:text-text-secondary-dark'
                      }`}
                    >
                      {exp.period}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            {/* Panel de detalle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                {active.theme === 'astroam' ? (
                  <AstroamPanel exp={active} />
                ) : (
                  <DefaultPanel exp={active} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
