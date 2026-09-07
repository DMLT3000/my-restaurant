import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import type { Language } from '../i18n/ui';
export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  return <label className="language-select">
    <span className="sr-only">{t.language}</span>
    <select value={language} onChange={event => setLanguage(event.target.value as Language)}>
      <option value="ua" lang="uk">UA</option>
      <option value="en" lang="en">EN</option>
      <option value="es" lang="es">ES</option>
    </select>
    <ChevronDown size={14} aria-hidden="true" />
  </label>;
}
