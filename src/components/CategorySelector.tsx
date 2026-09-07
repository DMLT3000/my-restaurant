import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/menu';
import { categoryName } from '../i18n/menu';
import { useLanguage } from '../i18n/context';
export default function CategorySelector({ value, onSelect }: { value: string; onSelect: () => void }) {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  return <label className="category-select">
    <span className="sr-only">{t.selectCategory}</span>
    <select value={value} onChange={event => { onSelect(); navigate(`/menu/${event.target.value}`); }}>
      <option value="all">{t.allCategories}</option>
      {categories.map(category => <option value={category.id} key={category.id}>{categoryName(category, language)}</option>)}
    </select>
    <ChevronDown size={20} aria-hidden="true" />
  </label>;
}
