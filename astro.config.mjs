import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://unfoundbox.com',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404')
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      wrap: true
    }
  }
});
