import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { allItems, categories } from '../data/menu';
import type { MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { categoryName } from '../i18n/menu';
import CategorySelector from '../components/CategorySelector';
import EmptyState from '../components/EmptyState';
import MenuSections from '../components/MenuSections';
export default function MenuPage({ onOpen, onSelect }: { onOpen: (item: MenuItem) => void; onSelect: () => void }) {
  const { category: categoryId = 'all' } = useParams();
  const { language, t } = useLanguage();
  const category = categories.find(value => value.id === categoryId);
  const items = categoryId === 'all' ? allItems : allItems.filter(item => item.categoryId === categoryId);
  return <div className="container menu-page">
    <Link to="/" className="back-link"><ArrowLeft size={16} aria-hidden="true" />{t.backToMenu}</Link>
    <CategorySelector value={category?.id ?? 'all'} onSelect={onSelect} />
    {category || categoryId === 'all' ? <>
      <div className="page-heading"><div><span className="eyebrow">{t.menu}</span><h1>{category ? categoryName(category, language) : t.allCategories}</h1></div><span className="item-count">{t.count}: {items.length}</span></div>
      <MenuSections items={items} onOpen={onOpen} grouped={categoryId === 'all'} />
    </> : <EmptyState kind="category" />}
  </div>;
}
