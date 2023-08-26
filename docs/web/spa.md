# Turning your website into a Single Page Application
There are two types of SPA, one with Client-side rendering and another with Server-side rendering.
## Client-side rendering
![web-spa01](/web-spa01.svg)
Client-side rendering is a good choice for heavily interactive web applications that don't need indexing or whose users visit frequently. It can leverage browser caching to skip the download phase on subsequent visits, such as online games.
### Benefits of client-side rendering:
**Development speed:** When working entirely on the client-side, we don't have to worry about the server compatibility of the code, for example, by using browser-only APIs like the window object.

**Cheaper:** Running a server adds a cost of infrastructure as you would need to run on a platform that supports JavaScript. We can host Client-only applications on any static server with HTML, CSS, and JavaScript files.

**Offline:** Because code entirely runs in the browser, it can nicely keep working while the internet is unavailable.
### Downsides of client-side rendering:
**Performance:** The user has to wait for the browser to download, parse and run JavaScript files. Depending on the network for the download part and the user's device for the parsing and execution, this can take some time and impact the user's experience.

**Search Engine Optimization:** Indexing and updating the content delivered via client-side rendering takes more time than with a server-rendered HTML document. This is related to the performance drawback we discussed, as search engine crawlers won't wait for the interface to be fully rendered on their first try to index the page.
## Server-side rendering
![web-spa01](/web-spa02.svg)
Some downsides can be fixed by using **Server-side rendering.** Instead of making the browser handle everything, we can make the *server* handle the rendering of pages. This boosts our SEO and make it have almost 0 seconds of initialization time. 

SSR is very versatile and can fit almost any use case, and is especially appropriate for any content-oriented websites: blogs, marketing websites, portfolios, e-commerce sites, and marketplaces. However, you will realise that there are a few issues with using SSR, if you open inspect right now with your Nuxt website, you can see errors about hydration.

![web-spa03](/web-spa03.png)

---
Today, we will be using SPA using CSR, to make things easier for us.
## Instructions
1. Go to your `nuxt.config.ts` file. It shouldn't be in any folder. You should see something like this
```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"]
})
```
2. Now, add a comma for the `modules` line and add a new line with `ssr: false`. This disables SSR. You should see something like this
```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false
})
```
CSR is now enabled, but when we click on our navigation links, it still needs a refresh to load the new page. This is where the **Search and Replace** function comes in handy
1. Go to the Search tab on the left side

![web-spa03](/web-spa04.png)

2. Search for `<a` and replace with `<NuxtLink` (If you do not see the Replace box click the little arrow on the left side). Press the `Replace All` icon on the right side of the Replace box.

![web-spa04](/web-spa05.png)

3. A dialog box will ask if you want to `Replace 10 occurrences across 3 files with '<NuxtLink'?`. Click on `Replace`
4. Now, you may realise that there are errors in some files. Using the Search and Replace function again, clear all the boxes, put `</a>` into the search box, and `</NuxtLink>` into the replace box. Once again, if the dialog box appears, click replace.
5. Go to your `navbar.vue` and find for this part of the code. It's at the top so it should be easy to find.
```vue
          <NuxtLink href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </NuxtLink>
```
6. Replace the `href="#"` with `href="/"`. Now, whenever you click on the logo at the top left of your website, it should head back to your homepage.
:::info
**What's href?** href is the destination of where your button will lead to. So now, our logo will lead to our homepage, which is at `/`
:::
7. Start your website with `npm run dev` if you haven't, or do a refresh if you have started it earlier.
8. You will realise that there is a loading animation when you load the website. We won't be covering that, but if you want to change it, you can [check out this page](https://nuxt.com/docs/api/configuration/nuxt-config#spaloadingtemplate)
---
Congratulations! You have now successfully enabled SPA with CSR for your website! Now that we have successfully made a website, let's change some information on it, shall we?