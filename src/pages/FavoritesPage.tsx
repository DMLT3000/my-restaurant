import { ArrowLeft, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allItems } from '../data/menu';
import type { MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { itemKey } from '../lib/catalog';
import { useFavorites } from '../lib/useFavorites';
import MenuSections from '../components/MenuSections';
import EmptyState from '../components/EmptyState';
export default function FavoritesPage({ onOpen }: { onOpen: (item: MenuItem) => void }) {
  const { t } = useLanguage();
  const { favorites } = useFavorites();
  const items = allItems.filter(item => favorites.includes(itemKey(item)));
  return <div className="container menu-page">
    <Link to="/" className="back-link"><ArrowLeft size={16} aria-hidden="true" />{t.backToMenu}</Link>
    <div className="page-heading favorites-heading"><div><span className="eyebrow"><Bookmark size={13} aria-hidden="true" />{t.brand}</span><h1>{t.favorites}</h1><p>{t.favoritesIntro}</p></div><span className="item-count">{t.count}: {items.length}</span></div>
    {items.length ? <MenuSections items={items} onOpen={onOpen} /> : <EmptyState kind="favorites" />}
  </div>;
}
