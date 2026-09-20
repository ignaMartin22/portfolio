/**
 * Optimiza las imágenes de la carpeta public/ en sitio.
 *
 * - Solo toca archivos > MIN_BYTES (jpg/jpeg/png/webp).
 * - Redimensiona a un máximo de 1920px (sin agrandar).
 * - Re-comprime con calidad conservadora (visiblemente igual).
 *
 * Uso: npm run optimize:images
 */
import { readdir, rename, stat, unlink, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const PUB = join(process.cwd(), 'public');
const MIN_BYTES = 200 * 1024;
const MAX_DIM = 1920;
const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function walk(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path, out);
    else out.push(path);
  }
  return out;
}

let count = 0;
let savedTotal = 0;

for (const file of await walk(PUB)) {
  const ext = extname(file).toLowerCase();
  if (!IMAGE_EXTS.has(ext)) continue;

  const before = (await stat(file)).size;
  if (before < MIN_BYTES) continue;

  // Se reescribe vía archivo temporal + rename para evitar conflictos
  // con OneDrive (Files On-Demand bloquea la escritura directa).
  const temp = `${file}.opt.tmp`;

  try {
    const resize = {
      width: MAX_DIM,
      height: MAX_DIM,
      fit: 'inside',
      withoutEnlargement: true,
    };

    let out;
    if (ext === '.png') {
      out = await sharp(file)
        .rotate()
        .resize(resize)
        .png({ quality: 85, compressionLevel: 9 })
        .toBuffer();
    } else if (ext === '.webp') {
      out = await sharp(file)
        .rotate()
        .resize(resize)
        .webp({ quality: 78 })
        .toBuffer();
    } else {
      out = await sharp(file)
        .rotate()
        .resize(resize)
        .jpeg({ quality: 78, mozjpeg: true, progressive: true })
        .toBuffer();
    }

    if (out.length >= before) {
      console.log(`${basename(file).padEnd(32)} sin cambios`);
      continue;
    }

    await writeFile(temp, out);
    await rename(temp, file);

    const saved = before - out.length;
    savedTotal += saved;
    count += 1;
    console.log(`${basename(file).padEnd(32)} ${(before / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB (ahorrado ${(saved / 1024).toFixed(0)}KB)`);
  } catch (error) {
    await unlink(temp).catch(() => {});
    console.log(`${basename(file).padEnd(32)} ERROR: ${error.message}`);
  }
}

console.log(`\nOptimizadas ${count} imágenes. Total ahorrado: ${(savedTotal / 1024).toFixed(0)}KB`);