import { Bookmark, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/context';
export default function EmptyState({ kind, onClear }: { kind: 'favorites' | 'search' | 'category'; onClear?: () => void }) {
  const { t } = useLanguage();
  const Icon = kind === 'favorites' ? Bookmark : Search;
  return <div className="empty-state">
    <span className="empty-icon"><Icon size={28} strokeWidth={1.4} aria-hidden="true" /></span>
    <h2>{kind === 'favorites' ? t.noFavorites : kind === 'search' ? t.noResults : t.notFound}</h2>
    <p>{kind === 'favorites' ? t.noFavoritesHint : kind === 'search' ? t.noResultsHint : t.notFoundHint}</p>
    {kind === 'search' ? <button className="primary-button" onClick={onClear}>{t.clearSearch}<ArrowRight size={17} aria-hidden="true" /></button> :
      <Link className="primary-button" to="/">{t.browseMenu}<ArrowRight size={17} aria-hidden="true" /></Link>}
  </div>;
}
