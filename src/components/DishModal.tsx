import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/context';
import { dishDescription, dishName, localizeWeight } from '../i18n/menu';
import DishImage from './DishImage';
import DishPrice from './DishPrice';
import FavoriteButton from './FavoriteButton';

export default function DishModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const { t, language } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const description = dishDescription(item, language);
  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const scrollY = window.scrollY;
    const originalStyle = document.body.getAttribute('style');
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    Object.assign(document.body.style, { position: 'fixed', top: `-${scrollY}px`, width: '100%', overflow: 'hidden', paddingRight: `${scrollbar}px` });
    element?.showModal();
    closeButton.current?.focus({ preventScroll: true });
    return () => {
      element?.close();
      if (originalStyle === null) document.body.removeAttribute('style');
      else document.body.setAttribute('style', originalStyle);
      window.scrollTo({ top: scrollY, behavior: 'instant' });
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
      else document.getElementById('main-content')?.focus({ preventScroll: true });
    };
  }, []);
  return createPortal(<dialog ref={dialog} className="dish-dialog" aria-modal="true" aria-labelledby="dish-dialog-title"
    onCancel={event => { event.preventDefault(); onClose(); }}
    onKeyDown={event => {
      if (event.key !== 'Tab') return;
      const controls = event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), [tabindex="0"]');
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="dish-dialog-sheet">
      <div className="sheet-handle" aria-hidden="true" />
      <button ref={closeButton} className="icon-button modal-close" aria-label={t.close} onClick={onClose}><X size={22} aria-hidden="true" /></button>
      <DishImage item={item} large />
      <div className="dish-dialog-content">
        <h2 id="dish-dialog-title">{dishName(item, language)}</h2>
        <DishPrice item={item} />
        {item.weight && <p className="modal-weight"><span>{t.weight}</span><strong>{localizeWeight(item.weight, language)}</strong></p>}
        {description && <p className="modal-description">{description}</p>}
        <FavoriteButton item={item} expanded />
      </div>
    </div>
  </dialog>, document.body);
}
