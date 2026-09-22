import { useEffect, useState } from 'react';

const THEME_KEY = 'portfolio-theme';

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    /* localStorage no disponible */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* localStorage no disponible */
    }
    const metaColor = document.getElementById('theme-color-meta');
    const metaScheme = document.getElementById('color-scheme-meta');
    if (metaColor) metaColor.setAttribute('content', theme === 'dark' ? '#0B0F14' : '#FAFAF9');
    if (metaScheme) metaScheme.setAttribute('content', theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}