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
    siteTitle: 'BBCS NuxtDocs',
    editLink: {
      pattern: 'https://github.com/icepcp/nuxtdocs-bbcs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/docs/introduction', activeMatch: '/docs/' }
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
          { text: 'TailwindUI', link: '/docs/web/home' },
          { text: 'Making components', link: '/docs/web/components' },
          { text: 'Adding another page', link: '/docs/web/another-page' },
          { text: 'Changing const', link: '/docs/web/change-const' },
          { text: 'Change to SPA', link: '/docs/web/spa' },
          { text: 'Edit your website', link: '/docs/web/edit' },
        ]
      },
      {
        text: 'Hosting',
        items: [
          { text: 'Format code', link: '/docs/host/format' },
          { text: 'Commit and Sync', link: '/docs/host/commit' },
          { text: 'Deploy on Netlify', link: '/docs/host/deploy' },
        ]
      },
    ],
    search: {
      provider: 'local'
    }
  },
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-451F89P598' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-451F89P598');`,
    ],
    [
      'script',
      {},
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ilocny1ldg");`,
    ]
  ]
})
