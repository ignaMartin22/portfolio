export default function Navbar() {
  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    {label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-1
        px-2 py-2 rounded-full
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl backdrop-saturate-150
        border border-white/20 dark:border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
      "
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="
            px-4 py-2 rounded-full text-sm font-medium
            text-text-light dark:text-text-dark
            hover:bg-white/20 dark:hover:bg-white/10
            transition-colors duration-200
          "
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}