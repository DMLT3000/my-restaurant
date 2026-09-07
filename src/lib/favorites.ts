import { migrateFavorites } from './catalog';
export const FAVORITES_KEY = 'favorites';
export const FAVORITES_EVENT = 'favorites-changed';
let memory: string[] = [];
let sessionOnly = false;
export function getFavorites(): string[] {
  if (sessionOnly) return memory;
  try {
    const data: unknown = JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]');
    const values = Array.isArray(data) ? data.filter((value): value is string => typeof value === 'string') : [];
    memory = migrateFavorites(values);
    if (JSON.stringify(values) !== JSON.stringify(memory)) {
      try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(memory)); } catch { sessionOnly = true; }
    }
  } catch { /* Keep the current session usable if storage is blocked or malformed. */ }
  return memory;
}
export function toggleFavorite(key: string): string[] {
  const current = getFavorites();
  memory = current.includes(key) ? current.filter(value => value !== key) : [...current, key];
  try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(memory)); } catch { sessionOnly = true; }
  window.dispatchEvent(new Event(FAVORITES_EVENT));
  return memory;
}
