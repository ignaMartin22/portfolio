// Araña de la marca: recorte de papel tipo sticker (borde papel, cuerpo tinta, marca roja).
// Dibujada cabeza abajo, colgando del hilo que se ata arriba del abdomen.
const LEFT_LEGS = [
  'M28 40 L20 46 L16 56',
  'M27 37 L17 41 L9 49',
  'M27 35 L16 32 L7 35',
  'M28 32 L20 25 L13 18',
];

const RIGHT_LEGS = LEFT_LEGS.map((d) =>
  d.replace(/(\d+) (\d+)/g, (_, x, y) => `${64 - Number(x)} ${y}`),
);

const LEGS = [...LEFT_LEGS, ...RIGHT_LEGS];

function Body({ stroke, strokeWidth }) {
  return (
    <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {LEGS.map((d) => (
        <path key={d} d={d} fill="none" />
      ))}
      <ellipse cx="32" cy="21" rx="9.5" ry="11.5" fill={stroke} />
      <circle cx="32" cy="38" r="6.5" fill={stroke} />
      <path d="M32 2 V10" fill="none" />
    </g>
  );
}

export default function SpiderMark({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      {/* Borde de papel recortado */}
      <Body stroke="var(--color-paper)" strokeWidth="7" />
      {/* Tinta */}
      <Body stroke="var(--color-ink)" strokeWidth="2.6" />
      {/* Marca roja de papel roto */}
      <path
        d="M27 16 L33 13.5 L31.5 19 L37.5 17 L35.5 25.5 L29.5 27.5 L31 23 L26 24.5 Z"
        fill="var(--color-accent-dark)"
      />
      {/* Ojos */}
      <circle cx="29.8" cy="40.5" r="1.3" fill="var(--color-paper)" />
      <circle cx="34.2" cy="40.5" r="1.3" fill="var(--color-paper)" />
    </svg>
  );
}
