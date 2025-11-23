const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const verbose = process.argv.includes('--verbose') || process.env.VERBOSE === '1'

// Configurações de tamanhos para diferentes dispositivos
const sizes = {
  sm: { width: 400, height: 300 },    // Mobile
  md: { width: 800, height: 600 },    // Tablet
  lg: { width: 1200, height: 900 },   // Desktop
};

async function optimizeImages() {
  const galleryDir = path.join(__dirname, '../public/images/gallery');
  const optimizedDir = path.join(__dirname, '../public/images/gallery-optimized');

  try {
    // Criar diretório otimizado
    await fs.mkdir(optimizedDir, { recursive: true });
    
    const files = await fs.readdir(galleryDir);
    
    for (const file of files) {
      if (!['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) continue;
      
      if (verbose) console.log(`\nOtimizando: ${file}`);
      const inputPath = path.join(galleryDir, file);
      const filename = path.parse(file).name;

      // Processar cada tamanho
      for (const [size, dimensions] of Object.entries(sizes)) {
        if (verbose) console.log(`  Criando versão ${size}...`);
        
        // WebP version (melhor compressão, navegadores modernos)
        await sharp(inputPath)
          .resize(dimensions.width, dimensions.height, { fit: 'cover' })
          .webp({ quality: 80, effort: 6 })
          .toFile(path.join(optimizedDir, `${filename}-${size}.webp`));

        // AVIF version (melhor compressão, suporte crescente)
        await sharp(inputPath)
          .resize(dimensions.width, dimensions.height, { fit: 'cover' })
          .avif({ quality: 65, effort: 9 })
          .toFile(path.join(optimizedDir, `${filename}-${size}.avif`));

        // JPG version (fallback universal)
        await sharp(inputPath)
          .resize(dimensions.width, dimensions.height, { fit: 'cover' })
          .jpeg({ 
            quality: 85,
            mozjpeg: true,
            chromaSubsampling: '4:4:4'
          })
          .toFile(path.join(optimizedDir, `${filename}-${size}.jpg`));
      }

      // Criar thumbnails para preview
      await sharp(inputPath)
        .resize(100, 100, { fit: 'cover' })
        .webp({ quality: 60 })
        .toFile(path.join(optimizedDir, `${filename}-thumb.webp`));
    }

    if (verbose) {
      console.log('\n✨ Otimização concluída!');
      console.log('📁 Imagens salvas em: public/images/gallery-optimized');
    }
    
  } catch (err) {
    console.error('❌ Erro durante a otimização:', err);
  }
}

optimizeImages();