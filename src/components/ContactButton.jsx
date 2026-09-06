export default function ContactButton({ icon: Icon, label, sublabel, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative flex items-center gap-4 p-5 rounded-2xl
        bg-white/5 dark:bg-white/[0.03]
        backdrop-blur-md
        border border-text-secondary-light/15 dark:border-text-secondary-dark/15
        transition-all duration-300
        hover:border-accent-light dark:hover:border-accent-dark
        hover:-translate-y-1
      "
    >
      <span
        className="
          absolute inset-0 rounded-2xl border border-accent-light dark:border-accent-dark
          opacity-0 scale-100
          group-hover:opacity-50 group-hover:scale-105
          transition-all duration-500
        "
      />
      <div
        className="
          relative w-12 h-12 rounded-full flex items-center justify-center shrink-0
          bg-accent-light/10 dark:bg-accent-dark/10
          group-hover:bg-accent-light dark:group-hover:bg-accent-dark
          transition-colors duration-300
        "
      >
        <Icon className="w-6 h-6 text-accent-light dark:text-accent-dark group-hover:text-white dark:group-hover:text-bg-dark transition-colors duration-300" />
      </div>
      <div className="text-left">
        <p className="text-text-light dark:text-text-dark font-medium">{label}</p>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
          {sublabel}
        </p>
      </div>
    </a>
  );
}