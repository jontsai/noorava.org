import { defineConfig } from '@hacktoolkit/nextjs-htk';

export default defineConfig({
  site: {
    name: 'NoorAva',
    title: 'NoorAva | Persian poetry, carried in light and voice',
    description:
      'NoorAva is a nonprofit cultural home for Persian poetry, music, memory, and intergenerational storytelling.',
    url: 'https://noorava.org',
    author: 'NoorAva',
  },
  navigation: [
    { name: 'Home', path: '/', showInNav: true },
    { name: 'Mission', path: '/#mission', showInNav: true },
    { name: 'Poet', path: '/#poet', showInNav: true },
    { name: 'Programs', path: '/#programs', showInNav: true },
    { name: 'Contact', path: '/#contact', showInNav: true },
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} NoorAva. All rights reserved.`,
  },
});
