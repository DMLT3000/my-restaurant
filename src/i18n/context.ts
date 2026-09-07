import { createContext, useContext } from 'react';
import type { Language, UI } from './ui';
export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: UI;
} | null>(null);
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageProvider is missing');
  return context;
}
