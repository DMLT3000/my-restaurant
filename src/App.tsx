// src/App.tsx
import { useEffect, useMemo, useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

import { categoriesWithItems, allItems, categories } from "./data/menu";
import MenuCategory from "./MenuCategory";
import FavoritesPage from "./FavoritesPage";

import { Moon, Sun } from "lucide-react";
import { getFavorites, toggleFavorite } from "./lib/favorites";

export default function App() {
  /* ===== ТЕМА ===== */
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "dark"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ===== ПОШУК / КАТЕГОРІЯ ===== */
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  /* ===== ЗАКЛАДКИ (спільний стан для всіх сторінок) ===== */
  const [favorites, setFavorites] = useState<string[]>(() => getFavorites());
  const handleToggleFavorite = (id: string) => {
    const updated = toggleFavorite(id); // оновлює localStorage
    setFavorites(updated);              // оновлює спільний стан
  };

  /* ===== ФІЛЬТРАЦІЯ КАТЕГОРІЙ/СТРАВ ===== */
  const filteredCats = useMemo(() => {
    const query = q.trim().toLowerCase();
    const base =
      cat === "all"
        ? categoriesWithItems
        : categoriesWithItems.filter((c) => c.id === cat);

    if (!query) return base;

    return base
      .map((c) => ({
        ...c,
        items: c.items.filter((i) => i.name.toLowerCase().includes(query)),
      }))
      .filter((c) => c.items.length > 0);
  }, [q, cat]);

  return (
    <Router>
      {/* ===== Фіксований хедер: лого + меню + пошук ===== */}
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">Три Карася</Link>

          <div className="nav-right">
            <Link to="/" className="nav-link">Меню</Link>
            <Link to="/favorites" className="nav-link">Мої закладки</Link>

            <button
              className="theme-btn"
              aria-label="Перемкнути тему"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        <div className="filters">
          <div className="row">
            <input
              className="input"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Пошук страви..."
            />
            <select
              className="select"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              <option value="all">Усі категорії</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* ===== Контент / Маршрути ===== */}
      <main className="container">
        <Routes>
          {/* Головна (меню) */}
          <Route
            path="/"
            element={
              <>
                {filteredCats.length === 0 ? (
                  <p className="empty">За запитом нічого не знайдено.</p>
                ) : (
                  filteredCats.map((c) => (
                    <MenuCategory
                      key={c.id}
                      category={c}                          // { id, name, items }
                      favorites={favorites}                 // спільний стан
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))
                )}
              </>
            }
          />

          {/* Мої закладки */}
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                items={allItems}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}
