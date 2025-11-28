const sharp = require('sharp');
const path = require('path');

(async () => {
  try {
    const src = path.join(__dirname, '../public/images/eventosPontos/Planeta.jpg');
    const dest = path.join(__dirname, '../public/images/eventosPontos/Planeta-card.jpg');

    await sharp(src)
      .resize(1200, 768, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(dest);

    console.log('Optimized image saved to', dest);
  } catch (err) {
    console.error('Error optimizing image:', err);
    process.exit(1);
  }
})();
