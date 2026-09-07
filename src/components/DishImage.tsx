import { useState } from 'react';
import { Utensils } from 'lucide-react';
import type { MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { dishName } from '../i18n/menu';
export default function DishImage({ item, large = false }: { item: MenuItem; large?: boolean }) {
  const [failedSource, setFailedSource] = useState<string>();
  const { t, language } = useLanguage();
  return <span className={`dish-image${large ? ' dish-image--large' : ''}`}>
    {item.image && failedSource !== item.image ? <img src={item.image} alt={dishName(item, language)}
      loading={large ? 'eager' : 'lazy'} decoding="async" width="400" height="400" onError={() => setFailedSource(item.image)} /> :
      <span className="image-placeholder" role="img" aria-label={`${dishName(item, language)} · ${t.noPhoto}`}>
        <Utensils size={large ? 40 : 25} strokeWidth={1.2} aria-hidden="true" />
        {large && <span>{t.noPhoto}</span>}
      </span>}
  </span>;
}
