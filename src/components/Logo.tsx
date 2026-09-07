import { asset } from '../data/menu';
import { useLanguage } from '../i18n/context';
export default function Logo({ large = false }: { large?: boolean }) {
  const { t } = useLanguage();
  // The supplied SVG has an A4 artboard. Crop its empty margins in CSS; retain the original file.
  return <span className={`logo-mark${large ? ' logo-mark--large' : ''}`}>
    <img src={asset('assets/logoKarasi2.svg')} width="210" height="297" alt={t.brand} />
  </span>;
}
