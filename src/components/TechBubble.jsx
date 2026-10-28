export default function TechBubble({ icon: Icon, title }) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div
        className="
          relative w-16 h-16 flex items-center justify-center
          bg-bg-light dark:bg-bg-dark
          border-2 border-text-light/30 dark:border-text-secondary-dark/30
          transition-[transform,box-shadow,border-color] duration-200
          group-hover:-translate-x-0.5 group-hover:-translate-y-0.5
          group-hover:border-text-light dark:group-hover:border-terminal
          group-hover:shadow-[4px_4px_0_var(--color-accent-light)] dark:group-hover:shadow-[4px_4px_0_var(--color-accent-dark)]
        "
      >
        <Icon className="w-7 h-7 text-text-light dark:text-text-secondary-dark group-hover:text-accent-light dark:group-hover:text-terminal transition-colors duration-200" />
      </div>
      <span className="font-mono text-[11px] text-text-secondary-light dark:text-text-secondary-dark">
        {title}
      </span>
    </div>
  );
}
