import { createKitDocsLoader } from '@svelteness/kit-docs';

export const prerender = true;

export const load: import('./$types').LayoutLoad = createKitDocsLoader({
  sidebar: {
    '/': null,
    '/faqs': '/faqs',
    '/development-site': '/development-site',
    '/development-db': '/development-db',
    '/development-docs': '/development-docs',
  },
});