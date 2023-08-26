# Making components
Components allow us to split the website into independent and reusable pieces, and think about each piece in isolation. It's common for an app to be organized into a tree of nested components:
![web-components01](/web-components01.png)
Nuxt is amazing with components, as unlike Vue or Next.js, components are automatically imported if you place them in the `/components` folder.

Today, we will be making our navigation bar into a component, so that we can reuse it for our future pages.
## Instructions
1. Create a new folder by running this in the terminal
```bash
mkdir components
```
You'll see a new folder `components` appear.
:::info
Make sure that before you run the command, `npm run dev` isn't running. If it's running, you will be able to use the terminal as normal but no commands will be executed. Press **Ctrl+C** to stop npm, then run your command.
:::

2. Right click on the `components` folder and select `Create Vue Component`. Name it `navbar`. Expand the `components` folder and open `navbar.vue`

3. Now, we'll have to copy the `<header>` component into our `navbar.vue`. In `index.vue`, hover right beside line 3 on the left side. You'll see an arrow like 'V'. Click on it to collapse on the `<header>` component. Copy the entire component

4. Go into `navbar.vue` and paste your component in between `<div>`
```vue
<template>
  <div>
    <!-- put your component here -->
  </div>
</template>

<script lang="ts" setup>

</script>



<style>

</style>
```
5. Now go back to `index.vue` and then add 
```vue
<Navbar />
```
in between where the `<header>` used to be.

---
To check if you've done it correctly, run 
```bash
npm run dev
```
You should get the same page as you did before you set up your component.

**If you need a tutorial, do** [watch this short tutorial to help you out](/web-components02.mp4)