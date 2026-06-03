import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages requires a repository base path for project pages.
 * Set VITE_BASE_PATH=/your-repo-name/ in GitHub Actions or local builds.
 */
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          animations: ['gsap', '@gsap/react', 'framer-motion', '@react-spring/three', 'lenis']
        }
      }
    }
  }
})
