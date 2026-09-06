export default function TechBubble({ icon: Icon, title }) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div
        className="
          relative w-16 h-16 rounded-full flex items-center justify-center
          bg-white/5 dark:bg-white/[0.03]
          backdrop-blur-md
          border border-text-secondary-light/15 dark:border-text-secondary-dark/15
          transition-all duration-300
          group-hover:border-accent-light dark:group-hover:border-accent-dark
          group-hover:scale-110
        "
      >
        {/* Anillo spider-sense al hacer hover */}
        <span
          className="
            absolute inset-0 rounded-full border border-accent-light dark:border-accent-dark
            opacity-0 scale-100
            group-hover:opacity-60 group-hover:scale-125
            transition-all duration-500
          "
        />
        <Icon className="w-7 h-7 text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300" />
      </div>
      <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
        {title}
      </span>
    </div>
  );
}