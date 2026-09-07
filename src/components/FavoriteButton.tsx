import { Bookmark } from 'lucide-react';
import type { MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { dishName } from '../i18n/menu';
import { itemKey } from '../lib/catalog';
import { useFavorites } from '../lib/useFavorites';
export default function FavoriteButton({ item, expanded = false }: { item: MenuItem; expanded?: boolean }) {
  const { t, language } = useLanguage();
  const { favorites, toggleFavorite } = useFavorites();
  const key = itemKey(item);
  const active = favorites.includes(key);
  return <button type="button" className={`favorite-button${active ? ' is-saved' : ''}${expanded ? ' favorite-button--expanded' : ''}`}
    aria-pressed={active} aria-label={`${active ? t.remove : t.save}: ${dishName(item, language)}`}
    onClick={() => toggleFavorite(key)}>
    <Bookmark size={20} fill={active ? 'currentColor' : 'none'} aria-hidden="true" />
    {expanded && <span>{active ? t.saved : t.save}</span>}
  </button>;
}
