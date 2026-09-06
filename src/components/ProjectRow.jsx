import ProjectCarousel from './ProjectCarousel';

export default function ProjectRow({ project, reverse = false }) {
  return (
    <div
      className={`
        grid md:grid-cols-2 gap-10 items-center
        ${reverse ? 'md:[&>*:first-child]:order-2' : ''}
      `}
    >
      <ProjectCarousel images={project.images} alt={project.name} />

      <div>
        <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2">
          {project.tag}
        </p>
        <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-3">
          {project.name}
        </h3>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 px-5 py-2.5 rounded-full
            bg-accent-light dark:bg-accent-dark
            text-white dark:text-bg-dark font-medium text-sm
            hover:opacity-90 transition-opacity
          "
        >
          Ver proyecto →
        </a>
      </div>
    </div>
  );
}
