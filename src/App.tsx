import { useLayoutEffect, useRef, useState } from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
import type { MenuItem } from './data/menu';
import LanguageProvider from './i18n/LanguageProvider';
import { useLanguage } from './i18n/context';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DishModal from './components/DishModal';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchResults from './pages/SearchResults';

function RestaurantApp() {
  const { t } = useLanguage();
  const location = useLocation();
  const navigationType = useNavigationType();
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const scrollPositions = useRef(new Map<string, number>());
  const home = location.pathname === '/';
  const clearSearch = () => { setQuery(''); setSearchOpen(false); };
  const closeSearch = () => {
    clearSearch();
    document.querySelector<HTMLButtonElement>('[aria-controls="menu-search"]')?.focus();
  };
  useLayoutEffect(() => {
    setQuery(''); setSearchOpen(false); setSelectedItem(null);
    window.scrollTo({ top: navigationType === 'POP' ? scrollPositions.current.get(location.key) ?? 0 : 0, behavior: 'instant' });
    const positions = scrollPositions.current;
    return () => { positions.set(location.key, window.scrollY); };
  }, [location.key, navigationType]);
  return <>
    <a className="skip-link" href="#main-content" onClick={event => {
      event.preventDefault(); document.getElementById('main-content')?.focus();
    }}>{t.skip}</a>
    <Header home={home} searchOpen={searchOpen} onSearch={() => searchOpen ? closeSearch() : setSearchOpen(true)} />
    {!home && <SearchBar open={searchOpen} query={query} onChange={setQuery} onClose={closeSearch} />}
    <main id="main-content" tabIndex={-1}>
      {!home && searchOpen && query.trim() ? <SearchResults query={query} onOpen={setSelectedItem} onClear={() => setQuery('')} /> :
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Navigate to="/menu/all" replace />} />
          <Route path="/menu/:category" element={<MenuPage onOpen={setSelectedItem} onSelect={clearSearch} />} />
          <Route path="/favorites" element={<FavoritesPage onOpen={setSelectedItem} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>}
    </main>
    <footer className="site-footer container"><span>{t.brand} · {t.city}</span><span>{t.menuNote}</span></footer>
    {selectedItem && <DishModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
  </>;
}
export default function App() {
  return <LanguageProvider><HashRouter><RestaurantApp /></HashRouter></LanguageProvider>;
}
