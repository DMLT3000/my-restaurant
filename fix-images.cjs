// fix-images.cjs
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src", "data", "menu.ts");

try {
  let content = fs.readFileSync(filePath, "utf8");

  // видаляємо неправильні одинарні або подвійні лапки навколо шаблону
  const updated = content
    // замінює старі шляхи /img/... на шаблонні рядки з бектиками
    .replace(/image:\s*["']\/img\//g, "image: `${import.meta.env.BASE_URL}img/")
    // виправляє закриваючі лапки після .jpg", .webp", .png"
    .replace(/(\.(jpg|jpeg|png|webp))["']/g, "$1`");

  fs.writeFileSync(filePath, updated, "utf8");

  console.log("✅ Шляхи та лапки успішно оновлено у src/data/menu.ts!");
} catch (err) {
  console.error("❌ Помилка при оновленні:", err);
}


