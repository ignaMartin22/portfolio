import { useState } from 'react';
import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { useLanguage } from '../i18n/useLanguage';
import ProjectCarousel from './ProjectCarousel';
import CaseStudyModal from './CaseStudyModal';
import HighlightBadge from './HighlightBadge';

function ProjectTech({ tech = [] }) {
  if (!tech.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {tech.map(({ name, icon: Icon }) => (
        <span
          key={name}
          className="
            inline-flex items-center gap-2 px-2.5 py-1
            font-mono text-[11px] cursor-default
            border border-text-light/60 dark:border-terminal/50
            text-text-light dark:text-terminal
            hover:bg-text-light hover:text-bg-light
            dark:hover:bg-terminal dark:hover:text-ink
            transition-colors duration-200
          "
        >
          <Icon className="w-3.5 h-3.5" />
          {name}
        </span>
      ))}
    </div>
  );
}

function ProjectCover({ project }) {
  const monogram = project.name.replace(/app$/i, '').charAt(0);
  return (
    <div aria-hidden className="relative aspect-[16/10] overflow-hidden bg-ink isolate">
      {/* Señal: gradiente azul granulado */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[80%] aspect-square rounded-full bg-signal/60 blur-[80px]"
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="grain absolute inset-0 opacity-50" />

      <div className="relative h-full flex flex-col items-start justify-end gap-2 p-6">
        <span className="font-display text-8xl md:text-9xl leading-[0.8] text-paper">{monogram}</span>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-terminal">
          {project.coverNote}
        </p>
      </div>
    </div>
  );
}

export default function ProjectRow({ project, reverse = false, index = 0 }) {
  const [caseOpen, setCaseOpen] = useState(false);
  const { t } = useLanguage();
  const hasImages = Array.isArray(project.images) && project.images.some(Boolean);
  const hasLink = project.link && project.link !== '#';

  return (
    <div
      className={`
        grid md:grid-cols-2 gap-10 md:gap-12 items-center group/row
        ${reverse ? 'md:[&>*:first-child]:order-2' : ''}
      `}
    >
      <div className="relative">
        <span
          aria-hidden
          className="
            absolute -top-14 left-0 md:-left-8 -z-10
            font-display text-8xl leading-none select-none pointer-events-none
            text-transparent opacity-40
            [-webkit-text-stroke:1.5px_var(--color-text-secondary-light)]
            dark:[-webkit-text-stroke:1.5px_var(--color-text-secondary-dark)]
          "
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Captura pegada sobre papel */}
        <div
          className={`
            relative p-2.5 sm:p-3 bg-surface-light dark:bg-paper
            border border-ink/10 dark:border-transparent
            shadow-[0_18px_40px_rgba(11,11,16,0.25)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.5)]
            transition-transform duration-300 group-hover/row:rotate-0
            ${reverse ? 'rotate-[1deg]' : '-rotate-[1deg]'}
          `}
        >
          <span
            aria-hidden
            className={`absolute -top-3 z-20 w-24 h-6 bg-highlight/75 ${reverse ? 'left-8 -rotate-[5deg]' : 'right-8 rotate-[4deg]'}`}
          />
          {hasImages ? (
            <ProjectCarousel images={project.images} alt={project.name} />
          ) : (
            <ProjectCover project={project} />
          )}
        </div>
      </div>

      <div>
        {project.highlight && (
          <HighlightBadge className="mb-5">{project.highlight}</HighlightBadge>
        )}
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-light dark:text-accent-dark mb-3">
          {project.tag}
        </p>
        <h3 className="font-display uppercase text-4xl md:text-5xl leading-[0.95] text-text-light dark:text-text-dark mb-4">
          {project.name}
        </h3>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-2">
          {project.description}
        </p>

        <ProjectTech tech={project.tech} />

        {project.caseStudy && (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link btn-brand btn-primary gap-2"
              >
                {project.linkLabel ?? t('projects.view')}
                <HiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}

            {project.extraLinks?.map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/extra btn-brand btn-ghost gap-2"
              >
                {label}
                <HiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/extra:translate-x-0.5 group-hover/extra:-translate-y-0.5" />
              </a>
            ))}

            <button
              type="button"
              onClick={() => setCaseOpen(true)}
              className="btn-brand btn-ghost"
            >
              {t('projects.caseStudy')}
            </button>
          </div>
        )}

        {!project.caseStudy && (
          <div className="mt-8">
            {hasLink ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link btn-brand btn-primary gap-2"
              >
                {t('projects.view')}
                <HiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary-light dark:text-text-secondary-dark">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-accent-light/60 dark:bg-accent-dark/60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-light dark:bg-accent-dark" />
                </span>
                {t('projects.development')}
              </span>
            )}
          </div>
        )}
      </div>

      <CaseStudyModal
        project={project}
        isOpen={caseOpen}
        onClose={() => setCaseOpen(false)}
      />
    </div>
  );
}
