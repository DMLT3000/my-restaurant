import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from './context';
import { ui } from './ui';
import type { Language } from './ui';
const storageKey = 'language';
const isLanguage = (value: string | null): value is Language => value === 'ua' || value === 'en' || value === 'es';
function readLanguage(): Language {
  try {
    const value = localStorage.getItem(storageKey);
    return isLanguage(value) ? value : 'ua';
  } catch { return 'ua'; }
}
export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(readLanguage);
  const setLanguage = (value: Language) => {
    updateLanguage(value);
    try { localStorage.setItem(storageKey, value); } catch { /* In-memory selection still works. */ }
  };
  useEffect(() => {
    document.documentElement.lang = language === 'ua' ? 'uk' : language;
    document.title = `${ui[language].brand} · ${ui[language].menu}`;
  }, [language]);
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) updateLanguage(readLanguage());
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  return <LanguageContext.Provider value={{ language, setLanguage, t: ui[language] }}>{children}</LanguageContext.Provider>;
}
