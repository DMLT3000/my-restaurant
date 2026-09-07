import { ArrowDown, ArrowUpRight, ChevronRight, Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { asset, categoriesWithItems } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { categoryName } from '../i18n/menu';
import Logo from '../components/Logo';

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Три Карася, Валки, вул. Героїв Чорнобиля, 4')}`;
export default function HomePage() {
  const { t, language } = useLanguage();
  return <>
    <section className="hero container" aria-label={t.brand}>
      <img className="hero-image" src={asset('assets/hero.png')} width="2000" height="1294" alt={t.heroAlt} fetchPriority="high" />
      <div className="hero-caption"><span>{t.restaurant}</span><span>10:00 — 23:00</span></div>
      <a className="hero-scroll" href="#menu-categories" aria-label={t.browseMenu} onClick={event => {
        event.preventDefault(); document.getElementById('menu-categories')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      }}><ArrowDown size={20} aria-hidden="true" /></a>
    </section>
    <div className="container home-content">
      <section className="restaurant-info">
        <div className="restaurant-title"><span className="eyebrow">{t.restaurant}</span><h1>{t.brand}</h1>
          <a className="address-link" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={16} aria-hidden="true" /><span>{t.city}, {t.address}</span><ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
        <div className="welcome-note"><p>{t.welcome}</p><span>{t.daily} · 10:00–23:00</span></div>
      </section>
      <section id="menu-categories" className="home-menu" aria-labelledby="menu-title">
        <div className="home-section-title"><div><span className="eyebrow">01 / {t.menu}</span><h2 id="menu-title">{t.menu}</h2><p>{t.menuIntro}</p></div><span className="section-number" aria-hidden="true">{categoriesWithItems.length}</span></div>
        <div className="category-grid">{categoriesWithItems.map((category, index) =>
          <Link className="category-card" to={`/menu/${category.id}`} key={category.id}>
            <span className="category-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span className="category-card-title">{categoryName(category, language)}</span>
            <span className="category-card-arrow"><ChevronRight size={18} aria-hidden="true" /></span>
          </Link>)}
        </div>
      </section>
      <section className="about-section" aria-labelledby="about-title">
        <div className="about-intro"><span className="eyebrow">02 / {t.about}</span><h2 id="about-title">{t.about}</h2><p>{t.aboutIntro}</p><Logo large /></div>
        <div className="contact-list">
          <a className="contact-row" href="https://www.instagram.com/tri_karasya/" target="_blank" rel="noreferrer"><Instagram size={20} aria-hidden="true" /><span><small>Instagram</small><strong>@tri_karasya</strong></span><ArrowUpRight size={17} aria-hidden="true" /></a>
          <div className="contact-row"><Clock size={20} aria-hidden="true" /><span><small>{t.hours}</small><strong>{t.daily} · 10:00–23:00</strong></span></div>
          <a className="contact-row" href="tel:+380962710016"><Phone size={20} aria-hidden="true" /><span><small>{t.phone}</small><strong>+380 96 27 10 016</strong></span><ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="contact-row" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={20} aria-hidden="true" /><span><small>{t.addressLabel}</small><strong>{t.city}, {t.address}</strong></span><ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </section>
    </div>
  </>;
}
