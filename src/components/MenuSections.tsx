import { categories } from '../data/menu';
import type { MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { categoryName } from '../i18n/menu';
import { itemKey } from '../lib/catalog';
import DishListItem from './DishListItem';
export default function MenuSections({ items, onOpen, grouped = true }: { items: MenuItem[]; onOpen: (item: MenuItem) => void; grouped?: boolean }) {
  const { language } = useLanguage();
  const groups = grouped ? categories.map(category => ({ ...category, items: items.filter(item => item.categoryId === category.id) })) : [{ id: 'list', name: '', items }];
  return <div className="menu-sections">{groups.filter(group => group.items.length > 0).map(group =>
    <section className="menu-section" key={group.id} aria-label={grouped ? categoryName(group, language) : undefined}>
      {grouped && <div className="section-heading"><h2>{categoryName(group, language)}</h2><span>{group.items.length.toString().padStart(2, '0')}</span></div>}
      <div className="dish-list">{group.items.map(item => <DishListItem key={itemKey(item)} item={item} onOpen={onOpen} />)}</div>
    </section>)}
  </div>;
}
