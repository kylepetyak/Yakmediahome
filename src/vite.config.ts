import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // UI components chunk
          'ui-components': [
            './components/ui/button',
            './components/ui/card',
            './components/ui/input',
            './components/ui/sonner'
          ],
          
          // Core app components
          'core-components': [
            './components/Navigation',
            './components/HeroSection',
            './components/Footer'
          ],
          
          // Location pages chunk (they're similar and often accessed together)
          'location-pages': [
            './components/PhoenixPage',
            './components/ScottsdalePage',
            './components/TempePage',
            './components/MesaPage',
            './components/ChandlerPage',
            './components/GilbertPage',
            './components/GlendalePage'
          ],
          
          // Content creation pages chunk
          'content-creation-pages': [
            './components/PhoenixContentCreationPage',
            './components/ScottsdaleContentCreationPage',
            './components/TempeContentCreationPage',
            './components/MesaContentCreationPage',
            './components/ChandlerContentCreationPage',
            './components/GilbertContentCreationPage',
            './components/GlendaleContentCreationPage'
          ],
          
          // Services and blog chunk
          'services-blog': [
            './components/ServicesPage',
            './components/BlogPage',
            './components/BlogPostPage'
          ]
        }
      }
    },
    
    // Optimize for performance
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Enable source maps for debugging but minimize overhead
    sourcemap: false,
    
    // Optimize CSS
    cssMinify: 'lightningcss'
  },
  
  // Development optimizations
  server: {
    fs: {
      allow: ['..']
    }
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom'
    ],
    exclude: []
  }
})