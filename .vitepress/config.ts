import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home",
  titleTemplate: 'NuxtDocs',
  description: "Documentation for Nuxt.js to be used in BuildingBloCS Sept Conference",
  base: '/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'NuxtDocs BBCS',
    editLink: {
      pattern: 'https://github.com/icepcp/nuxtdocs-bbcs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction', activeMatch: '/docs/' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/docs/introduction' },
        ]
      },
      {
        text: 'Introduction',
        items: [
          { text: 'What is Nuxt?', link: '/docs/intro/nuxt' },
          { text: "What's TailwindCSS?", link: '/docs/intro/tailwindcss' },
          { text: "What is a Codespace?", link: '/docs/intro/codespace' },
        ]
      },
      {
        text: 'Prepare environment',
        items: [
          { text: 'Instructions', link: '/docs/env/instructions' },
          { text: 'Set up codespace', link: '/docs/env/setup' },
          { text: 'VS Code Interface', link: '/docs/env/interface' },
          { text: 'Setting up Nuxt', link: '/docs/env/nuxt' },
          { text: 'Setting up Tailwind', link: '/docs/env/tailwind' },
        ]
      },
      {
        text: 'Making your website',
        items: [
          { text: 'Set up a page', link: '/docs/web/pages' },
        ]
      },
    ],
    search: {
      provider: 'local'
    }
  }
})
