// src/FavoritesPage.tsx
import type { MenuItem } from "./data/menu";
import { Heart } from "lucide-react";

type Props = {
  items: MenuItem[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
};

export default function FavoritesPage({ items, favorites, onToggleFavorite }: Props) {
  const favItems = items.filter((i) => favorites.includes(i.id));

  return (
    <section className="section">
      <h2 className="section-title">Мої закладки</h2>

      {favItems.length === 0 ? (
        <p className="empty">Поки що порожньо.</p>
      ) : (
        <div className="grid">
          {favItems.map((item) => {
            const per100 = typeof item.price === "string" && /100\s*г/i.test(item.price);
            return (
              <article key={item.id} className="card">
                <div className="card-media">
                  {item.image ? <img src={item.image} alt={item.name} loading="lazy" /> : "Фото"}
                </div>
                <div className="card-body">
                  <div className="card-row">
                    <h3 className="card-title">{item.name}</h3>
                    <button
                      className="heart heart--active"
                      aria-label="Прибрати із закладок"
                      onClick={() => onToggleFavorite(item.id)}
                    >
                      <Heart size={18} />
                    </button>
                  </div>
                  {item.weight && <p className="meta">{item.weight}</p>}
                  <div className="price-wrap">
                    <span className="price">
                      {typeof item.price === "number" ? `${item.price} грн` : item.price}
                    </span>
                    {per100 && <span className="badge badge--accent">за 100 г</span>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}


