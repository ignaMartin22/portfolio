import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const INTERVAL_MS = 4500;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 28 : -28,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -28 : 28,
    opacity: 0,
  }),
};

export default function ProjectCarousel({ images = [], alt }) {
  const slides = images.filter(Boolean);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const count = slides.length;
  const current = ((index % count) + count) % count;

  const goTo = useCallback(
    (nextIndex, dir) => {
      if (!count) return;
      setDirection(dir);
      setIndex(((nextIndex % count) + count) % count);
    },
    [count],
  );

  const step = useCallback(
    (dir) => {
      goTo(current + dir, dir);
    },
    [current, goTo],
  );

  useEffect(() => {
    if (paused || count < 2) return undefined;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, count, current]);

  if (!count) return null;

  return (
    <div
      className="
        group relative rounded-2xl overflow-hidden shadow-xl
        border border-text-secondary-light/10 dark:border-text-secondary-dark/10
        bg-surface-light dark:bg-surface-dark
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="relative aspect-[16/10] bg-text-secondary-light/5 dark:bg-white/[0.03]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={`${slides[current]}-${current}`}
            src={slides[current]}
            alt={`${alt} — captura ${current + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </AnimatePresence>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={() => step(-1)}
            className="
              absolute left-3 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full
              flex items-center justify-center
              bg-bg-light/80 dark:bg-bg-dark/80
              text-text-light dark:text-text-dark
              border border-text-secondary-light/15 dark:border-text-secondary-dark/15
              backdrop-blur-md
              opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
              hover:border-accent-light dark:hover:border-accent-dark
              hover:text-accent-light dark:hover:text-accent-dark
              transition-all duration-300
            "
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={() => step(1)}
            className="
              absolute right-3 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full
              flex items-center justify-center
              bg-bg-light/80 dark:bg-bg-dark/80
              text-text-light dark:text-text-dark
              border border-text-secondary-light/15 dark:border-text-secondary-dark/15
              backdrop-blur-md
              opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
              hover:border-accent-light dark:hover:border-accent-dark
              hover:text-accent-light dark:hover:text-accent-dark
              transition-all duration-300
            "
          >
            <HiChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === current}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`
                  h-1.5 rounded-full transition-all duration-500
                  ${
                    i === current
                      ? 'w-6 bg-accent-light dark:bg-accent-dark'
                      : 'w-1.5 bg-white/70 dark:bg-white/40 hover:bg-accent-light/70 dark:hover:bg-accent-dark/70'
                  }
                `}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
