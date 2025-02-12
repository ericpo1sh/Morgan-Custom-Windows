import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures clean URLs work correctly
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Home Page
        about: path.resolve(__dirname, 'about/index.html'),
        services: path.resolve(__dirname, 'services/index.html'),
        gallery: path.resolve(__dirname, 'gallery/index.html'),
        faq: path.resolve(__dirname, 'faq/index.html'),
        contact: path.resolve(__dirname, 'contact/index.html'),
        privacy: path.resolve(__dirname, 'privacy/index.html'),
      },
    },
  },
  server: {
    open: '/index.html',
  }
});
