import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite config for GitHub Pages deployment.
 * Repository URL:
 * https://ujjwalkmr-connect.github.io/ujjwal-kumar/
 */
export default defineConfig({
  plugins: [react()],
  base: '/ujjwal-kumar/',
  build: {
    target: 'esnext',
    sourcemap: false,
    chunkSizeWarningLimit: 1600
  }
})
