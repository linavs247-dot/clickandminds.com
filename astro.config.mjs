// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The custom domain (see public/CNAME) serves at the root, so no `base`
  // path is needed even though this deploys via a User/Org Pages repo.
  site: 'https://clickandminds.com',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    // English stays unprefixed at "/", Spanish lives under "/es/".
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});