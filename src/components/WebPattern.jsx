export default function WebPattern() {
  return (
    <svg
className="fixed inset-0 w-screen h-screen opacity-[0.08] dark:opacity-[0.12] -z-10 text-text-light dark:text-text-dark pointer-events-none"      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="web" width="120" height="120" patternUnits="userSpaceOnUse">
          <path
            d="M60 0 L60 120 M0 60 L120 60 M0 0 L120 120 M120 0 L0 120"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
          <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#web)" />
    </svg>
  );
}