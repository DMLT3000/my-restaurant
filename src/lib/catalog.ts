import { allItems } from '../data/menu';
import type { MenuItem } from '../data/menu';
const groups = new Map<string, MenuItem[]>();
for (const item of allItems) groups.set(item.id, [...(groups.get(item.id) ?? []), item]);
/** Preserve original IDs. Duplicate IDs receive an unambiguous UI/storage key. */
export function itemKey(item: MenuItem): string {
  return (groups.get(item.id)?.length ?? 0) > 1 ? `${item.id}::${item.name.trim()}` : item.id;
}
/** Legacy IDs selected every matching dish. Preserve that selection, then allow independent toggles. */
export function migrateFavorites(values: string[]): string[] {
  return [...new Set(values.flatMap(value => groups.get(value)?.map(itemKey) ?? [value]))];
}
