// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sirjellosandwich.github.io',
  base: '/',
  outDir: 'build',
  vite: {
    plugins: [tailwindcss()]
  }
});