import { useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './language-context';
import { translations } from './translations';

const LANG_KEY = 'portfolio-lang';
const getInitialLang = () => {
  try {
    return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'es';
  } catch {
    return 'es';
  }
};

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* localStorage no disponible */
    }
    document.documentElement.lang = lang;
    const dict = translations[lang] ?? translations.es;
    document.title = dict.meta.title;
  }, [lang]);

  const value = useMemo(() => {
    const t = (key) =>
      key.split('.').reduce((acc, part) => (acc == null ? undefined : acc[part]), translations[lang]) ??
      key;
    return { lang, setLang, t };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}