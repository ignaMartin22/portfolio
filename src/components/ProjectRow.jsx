import { motion } from 'motion/react';
import { HiArrowUpRight } from 'react-icons/hi2';
import ProjectCarousel from './ProjectCarousel';

function ProjectTech({ tech = [] }) {
  if (!tech.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {tech.map(({ name, icon: Icon }) => (
        <span
          key={name}
          className="
            inline-flex items-center gap-2 px-3 py-1.5 rounded-full
            text-xs font-medium cursor-default
            border border-text-secondary-light/20 dark:border-text-secondary-dark/20
            bg-white/5 dark:bg-white/[0.03]
            text-text-secondary-light dark:text-text-secondary-dark
            hover:border-accent-light dark:hover:border-accent-dark
            hover:text-accent-light dark:hover:text-accent-dark
            hover:-translate-y-0.5 hover:shadow-lg
            hover:shadow-accent-light/10 dark:hover:shadow-accent-dark/10
            transition-all duration-300
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
    <div
      aria-hidden
      className="
        relative aspect-[16/10] rounded-2xl overflow-hidden
        border border-accent-light/20 dark:border-accent-dark/20
        bg-surface-light dark:bg-surface-dark
        isolate
      "
    >
      {/* Glows animados */}
      <motion.div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-accent-light/15 dark:bg-accent-dark/15 blur-[90px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 blur-[90px]"
        animate={{ x: [0, -35, 0], y: [0, -35, 0], scale: [1.15, 1, 1.15] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative h-full flex flex-col items-center justify-center gap-4">
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          <motion.span
            className="absolute inset-0 rounded-2xl border-2 border-accent-light dark:border-accent-dark"
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute inset-0 rounded-2xl border border-accent-light dark:border-accent-dark"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
          <div className="absolute inset-0 rounded-2xl flex items-center justify-center border border-accent-light/30 dark:border-accent-dark/30 bg-accent-light/10 dark:bg-accent-dark/10 backdrop-blur-md">
            <span className="text-3xl md:text-4xl font-black text-accent-light dark:text-accent-dark">
              {monogram}
            </span>
          </div>
        </div>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          App móvil · Repositorio privado
        </p>
      </div>
    </div>
  );
}

export default function ProjectRow({ project, reverse = false, index = 0 }) {
  const hasImages = Array.isArray(project.images) && project.images.some(Boolean);
  const hasLink = project.link && project.link !== '#';

  return (
    <div
      className={`
        grid md:grid-cols-2 gap-10 items-center group/row
        ${reverse ? 'md:[&>*:first-child]:order-2' : ''}
      `}
    >
      <div className="relative">
        <span
          aria-hidden
          className="
            absolute -top-9 left-0 md:-left-6 -z-10
            text-7xl font-black leading-none select-none pointer-events-none
            text-text-light/[0.04] dark:text-text-dark/[0.08]
          "
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {hasImages ? (
          <ProjectCarousel images={project.images} alt={project.name} />
        ) : (
          <ProjectCover project={project} />
        )}
      </div>

      <div>
        <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2">
          {project.tag}
        </p>
        <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-3">
          {project.name}
        </h3>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-2">
          {project.description}
        </p>

        <ProjectTech tech={project.tech} />

        <div className="mt-8">
          {hasLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/link inline-flex items-center gap-2 px-6 py-3 rounded-full
                bg-accent-light dark:bg-accent-dark
                text-white dark:text-bg-dark font-medium text-sm
                shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/20
                hover:-translate-y-0.5 hover:shadow-xl
                hover:shadow-accent-light/30 dark:hover:shadow-accent-dark/30
                active:translate-y-0 active:scale-95
                transition-all duration-300
              "
            >
              Ver proyecto
              <HiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent-light/60 dark:bg-accent-dark/60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-light dark:bg-accent-dark" />
              </span>
              En desarrollo
            </span>
          )}
        </div>
      </div>
    </div>
  );
}