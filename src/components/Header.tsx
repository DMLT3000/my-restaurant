import { Bookmark, Search } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../i18n/context';
import { useFavorites } from '../lib/useFavorites';
import { allItems } from '../data/menu';
import { itemKey } from '../lib/catalog';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
type Props = { home: boolean; searchOpen: boolean; onSearch: () => void };
export default function Header({ home, searchOpen, onSearch }: Props) {
  const { t } = useLanguage();
  const { favorites } = useFavorites();
  const count = allItems.filter(item => favorites.includes(itemKey(item))).length;
  return <header className={`site-header${home ? ' site-header--home' : ''}`}>
    <div className="header-inner container">
      <Link to="/" className="brand" aria-label={`${t.brand} · ${t.home}`}>
        <Logo /><span className="brand-name">{t.brand}</span>
      </Link>
      <nav className="header-actions" aria-label={t.menu}>
        <Link to="/" className="desktop-menu-link">{t.menu}</Link>
        {!home && <button className={`icon-button${searchOpen ? ' is-active' : ''}`} aria-label={t.search}
          aria-expanded={searchOpen} aria-controls="menu-search" onClick={onSearch}>
          <Search size={20} aria-hidden="true" />
        </button>}
        <NavLink to="/favorites" aria-label={`${t.favorites}${count ? ` (${count})` : ''}`}
          className={({ isActive }) => `icon-button bookmark-nav${isActive ? ' is-active' : ''}`}>
          <Bookmark size={20} aria-hidden="true" />
          {count > 0 && <span className="bookmark-count" aria-hidden="true">{count}</span>}
        </NavLink>
        <LanguageSelector />
      </nav>
    </div>
  </header>;
}
