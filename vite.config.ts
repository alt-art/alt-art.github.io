import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      treeshake: {
        preset: 'smallest',
        moduleSideEffects: true,
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          i18next: ['i18next', 'react-i18next'],
        },
      },
    },
  },
  plugins: [react(), eslint(), tailwindcss()],
  define: {
    'globalThis.__DEV__': 'false',
  },
});
