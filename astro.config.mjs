import { SITE_DOMAIN } from '../consts';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: `https://${SITE_DOMAIN}`,
	integrations: [mdx(), sitemap()],
});
