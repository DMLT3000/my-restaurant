import type { MenuItem } from '../data/menu';
import type { Language } from '../i18n/ui';
import { ui } from '../i18n/ui';

/** Only an explicit per-weight price is a per-100-g price; 100грн alone is not. */
export function formatPrice(price: MenuItem['price'], language: Language) {
  const value = String(price);
  const per100 = /(?:\/\s*|за\s+)100\s*г(?:р)?(?=$|\s)/i.test(value);
  const amount = value.replace(/\s*(?:\/\s*|за\s+)100\s*г(?:р)?(?=$|\s)/gi, '').replace(/\s*грн\.?/gi, '').trim();
  return { text: `${amount} ${ui[language].currency}`, per100 };
}
export function normalizeSearch(value: string): string {
  return value.toLocaleLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/[’'‘`]/g, '').trim();
}
