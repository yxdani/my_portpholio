import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    }
  }
});