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

  integrations: [
    react(),
    sitemap({
      // /styleguide is an internal design-system reference page, not a
      // real marketing page — keep it out of search engines' sitemap.
      filter: (page) => !page.includes('/styleguide'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});