import { HiTrophy } from 'react-icons/hi2';

// Sticker amarillo de póster para logros (premios, hackatones)
export default function HighlightBadge({ children, className = '' }) {
  if (!children) return null;
  return (
    <span
      className={`
        inline-flex items-center gap-2 px-3 pt-1.5 pb-1 -rotate-2
        bg-highlight text-ink
        font-display uppercase text-base tracking-wide leading-none
        shadow-[3px_3px_0_var(--color-ink)]
        ${className}
      `}
    >
      <HiTrophy className="w-4 h-4 -mt-0.5" />
      {children}
    </span>
  );
}
