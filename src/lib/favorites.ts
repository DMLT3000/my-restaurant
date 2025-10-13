// src/lib/favorites.ts

export function getFavorites(): string[] {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
}

export function toggleFavorite(id: string) {
  const current = getFavorites();
  let updated: string[];

  if (current.includes(id)) {
    updated = current.filter(x => x !== id);
  } else {
    updated = [...current, id];
  }

  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
}
