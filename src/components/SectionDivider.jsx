import { TbScissors } from 'react-icons/tb';

// Separador de zine: línea punteada de "cortar acá"
export default function SectionDivider() {
  return (
    <div aria-hidden className="flex items-center justify-center py-4 px-8">
      <div className="relative w-full max-w-5xl flex items-center gap-3 text-text-secondary-light/60 dark:text-text-secondary-dark/50">
        <TbScissors className="w-4 h-4 shrink-0 -rotate-90 text-accent-light dark:text-accent-dark" />
        <span className="flex-1 border-t-2 border-dashed border-current" />
      </div>
    </div>
  );
}
