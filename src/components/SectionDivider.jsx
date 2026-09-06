export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-4 px-8">
      <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-text-secondary-light/20 dark:via-text-secondary-dark/20 to-transparent" />
      <span className="absolute w-2 h-2 rotate-45 border border-accent-light dark:border-accent-dark bg-bg-light dark:bg-bg-dark" />
    </div>
  );
}