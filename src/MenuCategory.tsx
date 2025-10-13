// src/MenuCategory.tsx
import { Heart } from "lucide-react";
import type { MenuItem } from "./data/menu";

type Props = {
  category: { id: string; name: string; items: MenuItem[] };
  favorites: string[];
  onToggleFavorite: (id: string) => void;
};

export default function MenuCategory({ category, favorites, onToggleFavorite }: Props) {
  if (!category.items?.length) return null;

  return (
    <section className="section">
      <h2 className="section-title">{category.name}</h2>

      <div className="grid">
        {category.items.map((item: MenuItem) => {
          const active = favorites.includes(item.id);

          // Показувати бейдж "за 100 г" лише якщо явно присутнє "/100г" або "100 г" (а не "100грн")
          const per100 =
            typeof item.price === "string" &&
            /(\/\s*100\s*г(р)?|(^|\s)100\s*г(р)?(\s|$))/i.test(item.price);

          // Прибрати з відображення ціни суфікс "/100г" (різні варіації пробілів/«гр»)
          const displayPrice =
            typeof item.price === "number"
              ? `${item.price} грн`
              : item.price.replace(/\s*\/\s*100\s*г(р)?/gi, "").trim();

          return (
            <article key={item.id} className="card">
              {/* Фото страви */}
              <div className="card-media">
                {item.image ? (
                  <img src={item.image} alt={item.name} loading="lazy" />
                ) : (
                  <div className="no-photo">Фото</div>
                )}
              </div>

              <div className="card-body">
                <div className="card-row">
                  <h3 className="card-title">{item.name}</h3>

                  <button
                    className={`heart ${active ? "heart--active" : ""}`}
                    aria-label={active ? "У закладках" : "Додати в закладки"}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(item.id);
                    }}
                  >
                    <Heart size={18} />
                  </button>
                </div>

                {item.weight && <p className="meta">{item.weight}</p>}

                {/* Ціна + бейджі */}
                <div className="price-wrap">
                  <span className="price">{displayPrice}</span>

                  {per100 && <span className="badge badge--accent">за 100 г</span>}

                  {item.noPower && <span className="badge badge--dark">без світла</span>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}



