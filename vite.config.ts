import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'Portifolio - Pedro Mendes',
        short_name: 'Portifolio - Pedro Mendes',
        description: 'Personal portifolio of Pedro Mendes',
        background_color: '#dd6387',
        theme_color: '#dd6387',
        categories: ['portfolio', 'personal'],
        lang: 'en-US',
        id: '/',
      },
    }),
  ],
  define: {
    'globalThis.__DEV__': 'false',
  },
});
