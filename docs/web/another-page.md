# Adding another page
We are now going to set up another page
## Instructions
1. Right click on the pages folder again, select `Create Vue Page` and name it `company`.
2. Add your newly-created `<Navbar />` component between `<div>`
3. Head over to [TailwindUI's header components](https://tailwindui.com/components/marketing/sections/header) page
4. Do not press the copy button, instead, make sure you've switched the language to Vue (like earlier) and then switch over from the `Preview` tab to the `Code` tab.
5. Copy everything excluding `<template>`
6. Go back to `company.vue` and then paste your code under the `<Navbar />` component.
7. You will realise that your editor window title has gone red along with 2 erros. This is becase we have not copied the const for our project
:::info
Think of const like a variable, it can be updated, it can be used in code, etc. We are using const for our links and stats in the page
:::
8. Go back to the TailwindUI page and scroll down until you see `<script setup>`. You do not need to expand the consts, so copy everything excluding the `<script>`. Make sure that you copy the brackets, they are dark grey so they might not be that visible.
9. Once you have copied it, go back to `company.vue` and then scroll down until you see `<script lang="ts" setup>`. It should be right under `</template>`
10. Paste your copied const code in between `<script lang="ts" setup>`
---
Once you have pasted your const code, your editor window title should turn back to normal and all the errors are gone.

However, you will realise that when you run `npm run dev` and navigate to `/company` from your original link, the navigation bar and our "Work with us" section are being overlapped. This is because there is no spacing in between the navigation bar and the section. Add `mt-20` to the div right underneath `<Navbar />` in the `class=`. It should look like this
```vue
<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-20">
```
You can see the mt-20 right at the end of the code block. Now go and refresh your development page (the one which launched with `npm run dev`) and you should see that they are now no longer overlapping. 
:::info
**What did mt-20 do?** mt-20 means margin on top with a height of 20px. So, there is now a margin between the top and the section. The navbar is about 20px so this prevented it from overlapping. You can also use *pt-20*, personally I do not see much of a difference.
:::
## Help
* If your TailwindUI website only has `<html>` at the start and end, you haven't switched from HTML or Vue in the dropdown
* If your TailwindUI website only has a picture, change it from `Preview` to `Code`. This option can be seen beside the dropdown along with the copy button on the right side 
* **If you need a tutorial, do** [watch this short tutorial to help you out](/web-another-page01.mp4)

---
Now, the page is fixed, however, the navigation bar isn't. Let's fix that, in the next section.