import { allItems } from '../data/menu';
import type { MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { dishName, dishDescription } from '../i18n/menu';
import { normalizeSearch } from '../lib/format';
import MenuSections from '../components/MenuSections';
import EmptyState from '../components/EmptyState';
export default function SearchResults({ query, onOpen, onClear }: { query: string; onOpen: (item: MenuItem) => void; onClear: () => void }) {
  const { t, language } = useLanguage();
  const normalized = normalizeSearch(query);
  const items = allItems.filter(item => normalizeSearch(`${dishName(item, language)} ${dishDescription(item, language)}`).includes(normalized));
  return <div className="container menu-page">
    <div className="page-heading"><div><span className="eyebrow">{t.allCategories}</span><h1>{t.searchResults}</h1><p className="search-query">«{query.trim()}»</p></div><span className="item-count" role="status" aria-live="polite">{t.count}: {items.length}</span></div>
    {items.length ? <MenuSections items={items} onOpen={onOpen} /> : <EmptyState kind="search" onClear={onClear} />}
  </div>;
}
