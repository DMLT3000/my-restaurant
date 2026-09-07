import { useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '../i18n/context';
type Props = { open: boolean; query: string; onChange: (value: string) => void; onClose: () => void };
export default function SearchBar({ open, query, onChange, onClose }: Props) {
  const { t } = useLanguage();
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => { if (open) input.current?.focus(); }, [open]);
  return <div id="menu-search" className={`search-panel${open ? ' search-panel--open' : ''}`} inert={!open}>
    <div className="search-panel-inner container">
      <div role="search" className="search-field">
        <Search size={20} aria-hidden="true" />
        <input ref={input} type="search" value={query} aria-label={t.search} placeholder={t.searchPlaceholder}
          onChange={event => onChange(event.target.value)} onKeyDown={event => { if (event.key === 'Escape') onClose(); }} />
        <button className="icon-button" aria-label={query ? t.clearSearch : t.closeSearch}
          onClick={() => { if (query) { onChange(''); input.current?.focus(); } else onClose(); }}>
          <X size={19} aria-hidden="true" />
        </button>
      </div>
      <p className="search-hint">{t.searchHint}</p>
    </div>
  </div>;
}
