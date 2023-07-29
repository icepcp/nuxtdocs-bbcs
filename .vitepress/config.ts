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
      { text: 'Guide', link: '/introduction' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/introduction' },
        ]
      },
      {
        text: 'Introduction',
        items: [
          { text: 'What is Nuxt?', link: '/intro/nuxt' },
          { text: "What's TailwindCSS?", link: '/intro/tailwindcss' },
          { text: "What is a Codespace?", link: '/intro/codespace' },
        ]
      },
      {
        text: 'Prepare environment',
        items: [
          { text: 'Instructions', link: '/env/instructions' },
          { text: 'Set up codespace', link: '/env/setup' },
        ]
      },
    ],
    search: {
      provider: 'local'
    }
  }
})
