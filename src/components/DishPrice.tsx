import { ZapOff } from 'lucide-react';
import type { MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { formatPrice } from '../lib/format';
export default function DishPrice({ item }: { item: MenuItem }) {
  const { t, language } = useLanguage();
  const price = formatPrice(item.price, language);
  return <span className="dish-pricing">
    <span className="price-line"><span className="dish-price">{price.text}</span>
      {price.per100 && <span className="per-weight">{t.per100}</span>}
    </span>
    {item.noPower && <span className="power-badge" title={t.noPowerHint}><ZapOff size={12} aria-hidden="true" />{t.noPower}</span>}
  </span>;
}
