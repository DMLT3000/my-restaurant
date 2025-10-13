import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./images";        // папка з оригінальними фото
const outputDir = "./public/img";   // куди зберігати webp

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    const fileName = path.basename(file, ext);
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${fileName}.webp`);

    sharp(inputPath)
      .resize(1200) // максимум 1200px по ширині
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`✅ ${file} → ${fileName}.webp`))
      .catch(err => console.error(`❌ Помилка з ${file}:`, err));
  }
});
