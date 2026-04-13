import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      mozjpeg: {
        quality: 75
      },
      pngquant: {
        quality: [0.6, 0.8]
      }
    })
  ],
  
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
  },

  server: {
    host: true
  }
})
