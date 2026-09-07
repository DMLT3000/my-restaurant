import type { MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { dishDescription, dishName, localizeWeight } from '../i18n/menu';
import DishImage from './DishImage';
import DishPrice from './DishPrice';
import FavoriteButton from './FavoriteButton';
export default function DishListItem({ item, onOpen }: { item: MenuItem; onOpen: (item: MenuItem) => void }) {
  const { language, t } = useLanguage();
  const name = dishName(item, language);
  const description = dishDescription(item, language);
  return <article className="dish-row">
    <button className="dish-open" aria-label={`${t.details}: ${name}`} onClick={() => onOpen(item)}>
      <DishImage item={item} />
      <span className="dish-content">
        <span className="dish-name">{name}</span>
        <DishPrice item={item} />
        {item.weight && <span className="dish-weight">{localizeWeight(item.weight, language)}</span>}
        {description && <span className="dish-description">{description}</span>}
      </span>
    </button>
    <FavoriteButton item={item} />
  </article>;
}
