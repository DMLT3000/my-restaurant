import { useSyncExternalStore } from 'react';
import { FAVORITES_EVENT, FAVORITES_KEY, getFavorites, toggleFavorite } from './favorites';
let snapshot = getFavorites();
function getSnapshot() {
  const next = getFavorites();
  if (JSON.stringify(next) !== JSON.stringify(snapshot)) snapshot = next;
  return snapshot;
}
function subscribe(callback: () => void) {
  const storage = (event: StorageEvent) => {
    if (event.key === FAVORITES_KEY || event.key === null) callback();
  };
  window.addEventListener(FAVORITES_EVENT, callback);
  window.addEventListener('storage', storage);
  return () => {
    window.removeEventListener(FAVORITES_EVENT, callback);
    window.removeEventListener('storage', storage);
  };
}
export function useFavorites() {
  return { favorites: useSyncExternalStore(subscribe, getSnapshot), toggleFavorite };
}
