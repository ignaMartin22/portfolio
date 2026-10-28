import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { useLanguage } from '../i18n/useLanguage';

// Borde de "tijera" para la foto: polígono irregular determinístico (mismo en cada render)
function scissorPolygon(steps = 28, jitter = 1.6, seed = 11) {
  let s = seed;
  const rand = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  const pts = [];
  for (let i = 0; i <= steps; i++) pts.push([(i / steps) * 100, rand() * jitter]);
  for (let i = 1; i <= steps; i++) pts.push([100 - rand() * jitter, (i / steps) * 100]);
  for (let i = steps - 1; i >= 0; i--) pts.push([(i / steps) * 100, 100 - rand() * jitter]);
  for (let i = steps - 1; i >= 1; i--) pts.push([rand() * jitter, (i / steps) * 100]);
  return `polygon(${pts.map(([x, y]) => `${x.toFixed(2)}% ${y.toFixed(2)}%`).join(',')})`;
}

const PHOTO_CLIP = scissorPolygon();

// Filtro SVG que rompe los bordes de los bloques con la clase .torn
function TornPaperDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <filter id="torn" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="4" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

export default function TornPortrait() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  // Parallax suave: cada capa se mueve distinto según el mouse
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 20 });
  const y = useSpring(my, { stiffness: 120, damping: 20 });
  const backX = useTransform(x, (v) => v * -10);
  const backY = useTransform(y, (v) => v * -10);
  const frontX = useTransform(x, (v) => v * 8);
  const frontY = useTransform(y, (v) => v * 8);

  function handleMove(e) {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full aspect-[4/5] whitespace-nowrap"
    >
      <TornPaperDefs />

      {/* Papeles de fondo */}
      <motion.div aria-hidden style={{ x: backX, y: backY }} className="absolute inset-0">
        <div
          className="torn absolute inset-[2%_4%_8%_10%] -rotate-6 bg-paper-dim"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent 0 9px, rgba(11,11,16,.18) 9px 10px)',
          }}
        />
        <div className="torn absolute inset-[10%_0_4%_6%] rotate-[4deg] bg-accent-light dark:bg-accent-dark" />
        <div
          className="halftone absolute inset-[14%_2%_6%_10%] rotate-[4deg] opacity-45 mix-blend-multiply"
          style={{
            maskImage: 'linear-gradient(135deg, transparent 35%, #000 80%)',
            WebkitMaskImage: 'linear-gradient(135deg, transparent 35%, #000 80%)',
          }}
        />
      </motion.div>

      {/* Foto recortada sobre papel */}
      <div className="absolute inset-0 -rotate-[1.5deg]">
        <div aria-hidden className="torn absolute inset-[6%_9%_10%_8%] bg-paper shadow-[0_18px_40px_rgba(0,0,0,0.35)]" />
        <div className="absolute inset-[9%_12%_13%_11%] overflow-hidden" style={{ clipPath: PHOTO_CLIP }}>
          <img
            src="/ignacio-martin.webp"
            alt="Ignacio Martín"
            width="800"
            height="1200"
            fetchPriority="high"
            className="w-full h-full object-cover object-[50%_62%] contrast-[1.08] saturate-[.9]"
          />
        </div>
      </div>

      {/* Detalles al frente */}
      <motion.div style={{ x: frontX, y: frontY }} className="absolute inset-0 pointer-events-none">
        <span aria-hidden className="tape absolute top-[3%] left-[30%] w-[34%] h-[8%] -rotate-[8deg]" />
        <span aria-hidden className="tape absolute bottom-[9%] right-[2%] w-[26%] h-[8%] -rotate-[38deg]" />

        <span className="absolute -top-[5%] right-0 flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-text-light dark:text-terminal">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-accent-light/60 dark:bg-terminal/60 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-light dark:bg-terminal" />
          </span>
          {t('hero.available')}
        </span>

        <span className="absolute hidden sm:block top-[40%] -right-6 md:-right-20 rotate-[8deg] font-hand text-lg text-text-light dark:text-text-dark [text-shadow:0_2px_0_var(--color-bg-light)] dark:[text-shadow:0_2px_0_var(--color-bg-dark)]">
          ← {t('hero.note')}
        </span>

        <span className="absolute bottom-[3%] left-0 -rotate-[4deg] bg-highlight text-ink font-display uppercase text-xl md:text-2xl tracking-wide px-3.5 pt-1.5 pb-1">
          {t('hero.location')}
        </span>

        <span className="absolute bottom-[1%] right-[4%] font-mono text-[10px] tracking-[0.1em] text-text-secondary-light dark:text-text-secondary-dark">
          -24.18°S · -65.30°W
        </span>
      </motion.div>
    </div>
  );
}
