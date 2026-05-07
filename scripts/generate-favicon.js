const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const STATIC = path.join(__dirname, '..', 'static');

// Fox tail icon: gradient circle + white fox tail silhouette
const sizes = [16, 32, 180, 192, 512];

async function generate() {
  for (const size of sizes) {
    const pad = Math.round(size * 0.04);
    const r = (size / 2) - pad;
    const cx = size / 2;
    const cy = size / 2;

    // Scale coordinates relative to size
    const s = (v) => Math.round(v * size / 512);

    const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#f472b6"/>
    </linearGradient>
  </defs>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#bg)"/>
  <!-- Fox tail: thick flowing curve with bushy tip -->
  <path d="
    M ${s(150)} ${s(390)}
    C ${s(145)} ${s(330)}, ${s(170)} ${s(280)}, ${s(220)} ${s(260)}
    C ${s(270)} ${s(240)}, ${s(310)} ${s(210)}, ${s(330)} ${s(170)}
    C ${s(345)} ${s(140)}, ${s(355)} ${s(115)}, ${s(350)} ${s(105)}
    C ${s(345)} ${s(95)}, ${s(325)} ${s(100)}, ${s(310)} ${s(120)}
    C ${s(295)} ${s(140)}, ${s(290)} ${s(165)}, ${s(295)} ${s(180)}
    C ${s(300)} ${s(195)}, ${s(315)} ${s(205)}, ${s(340)} ${s(195)}
    C ${s(365)} ${s(185)}, ${s(380)} ${s(155)}, ${s(385)} ${s(130)}
    C ${s(390)} ${s(105)}, ${s(380)} ${s(85)}, ${s(360)} ${s(90)}
  " fill="none" stroke="white" stroke-width="${s(42)}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    let outName;
    if (size === 16) outName = 'favicon-16.png';
    else if (size === 32) outName = 'favicon-32.png';
    else if (size === 180) outName = 'apple-touch-icon.png';
    else if (size === 192) outName = 'icon-192.png';
    else outName = 'icon-512.png';

    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(path.join(STATIC, outName));

    console.log(`  ${outName} (${size}x${size})`);
  }
}

generate().then(() => console.log('Done!')).catch(e => { console.error(e); process.exit(1); });
