export default function CvButton() {
  return (
    <a
      href="/Ignacio-Martin-CV.pdf"
      download
      className="
        inline-flex items-center gap-3 mt-6
        px-6 py-3 rounded-full
        bg-accent-light dark:bg-accent-dark
        text-white dark:text-bg-dark font-medium text-sm
        hover:opacity-90 transition-opacity
        shadow-lg
      "
    >
              <img
        src="/spider-icon.png"
        alt=""
        className="w-6 h-6 object-contain"
      />
     Curriculum Vitae

    </a>
    
  );
}