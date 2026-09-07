import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = path.resolve(import.meta.dirname, '..');
const cache = new Map();
function moduleUrl(relative) {
  const file = path.resolve(root, relative);
  if (cache.has(file)) return cache.get(file);
  let code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText.replaceAll('import.meta.env', '({ BASE_URL: "/my-restaurant/" })');
  code = code.replace(/from\s+(['"])(\.[^'"]+)\1/g, (_, quote, specifier) => {
    const dependency = path.resolve(path.dirname(file), `${specifier}.ts`);
    return `from ${quote}${moduleUrl(dependency)}${quote}`;
  });
  const url = `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
  cache.set(file, url);
  return url;
}
const menu = await import(moduleUrl('src/data/menu.ts'));
const translations = await import(moduleUrl('src/i18n/menu.ts'));
const catalog = await import(moduleUrl('src/lib/catalog.ts'));
const formatting = await import(moduleUrl('src/lib/format.ts'));
assert.equal(menu.allItems.length, 118, 'All 118 original dishes must remain present');
assert.equal(menu.categories.length, 16, 'All 16 original categories must remain present');
assert.equal(new Set(menu.allItems.map(catalog.itemKey)).size, 118, 'Every dish has an independent key');
const publicFiles = fs.readdirSync(path.join(root, 'public/img'));
let photoCount = 0;
for (const item of menu.allItems) {
  assert(translations.dishTranslations[item.name.trim()], `Missing dish translation: ${item.name}`);
  assert(menu.categories.some(category => category.id === item.categoryId));
  for (const language of ['en', 'es']) {
    assert(translations.dishTranslations[item.name.trim()][language]);
    assert(!/[\u0400-\u04ff]/.test(translations.dishName(item, language)), `Untranslated name: ${item.name}`);
    assert(!/[\u0400-\u04ff]/.test(translations.localizeWeight(item.weight, language)), `Untranslated weight: ${item.name}`);
    if (item.note) assert(translations.noteTranslations[item.note]?.[language], `Missing note translation: ${item.note}`);
  }
  if (item.image) {
    assert(item.image.startsWith('/my-restaurant/img/'));
    assert(publicFiles.includes(path.basename(item.image)), `Missing asset or filename case mismatch: ${item.image}`);
    photoCount++;
  }
}
for (const category of menu.categories) assert(translations.categoryTranslations[category.id]);
assert.equal(formatting.formatPrice('100грн', 'ua').per100, false);
assert.deepEqual(formatting.formatPrice('270грн/100г', 'en'), { text: '270 UAH', per100: true });
assert.deepEqual(formatting.formatPrice('195грн / 100г', 'es'), { text: '195 UAH', per100: true });
assert.deepEqual(formatting.formatPrice('130/160/190грн', 'ua'), { text: '130/160/190 грн', per100: false });
assert.equal(formatting.normalizeSearch('ЦЕЗАР'), formatting.normalizeSearch('цезар'));
assert.equal(formatting.normalizeSearch('Salmón'), formatting.normalizeSearch('salmon'));
const legacy = ['br1', 'beer10', 'sal12', 'unknown-old-id'];
const migrated = catalog.migrateFavorites(legacy);
assert.equal(migrated.length, 9);
assert.deepEqual(catalog.migrateFavorites(migrated), migrated, 'Migration is idempotent');
assert(migrated.includes('br1') && migrated.includes('unknown-old-id'));

// Exercise the existing storage API, including malformed and unavailable storage.
const storage = new Map([['favorites', JSON.stringify(legacy)]]);
globalThis.localStorage = {
  getItem: key => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, value),
};
globalThis.window = new EventTarget();
const favorites = await import(moduleUrl('src/lib/favorites.ts'));
assert.deepEqual(favorites.getFavorites(), migrated);
const onion = menu.allItems.find(item => item.name === 'Цибулеві кільця');
const panko = menu.allItems.find(item => item.name === 'Креветки Панко');
favorites.toggleFavorite(catalog.itemKey(onion));
assert(!favorites.getFavorites().includes(catalog.itemKey(onion)));
assert(favorites.getFavorites().includes(catalog.itemKey(panko)), 'Duplicate IDs toggle independently');
storage.set('favorites', '{broken');
assert.doesNotThrow(() => favorites.getFavorites());
globalThis.localStorage = { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } };
favorites.toggleFavorite('br2');
assert(favorites.getFavorites().includes('br2'));
favorites.toggleFavorite('br2');
assert(!favorites.getFavorites().includes('br2'));

assert.equal(fs.readFileSync(path.join(root, 'dist/404.html'), 'utf8'), fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8'));
console.log(`PASS: 118 dishes, 16 categories, ${photoCount} existing photo references, complete EN/ES translations, independent bookmarks, migration, price/weight formatting, GitHub Pages fallback.`);
