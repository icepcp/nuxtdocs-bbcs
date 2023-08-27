# Chaning `const` values
Now, life, will never be this easy, as in, having to change const just to update our navbar links. Luckily, TailwindUI eases some of that pain, and has prepared const for us to change and add our navbar links. 

Before we do that, let's talk more about the use of const. If you take a look at the BuildingBloCS's website code for the partners page, you will realise that we have many partner cards, however, we only have one set of partner card in the code, and a `<script setup>` at the bottom where we list our partner's details into. This is exactly what the navbar code does, but instead of partner's details, we add our navigation links.
## Instructions
1. Head over to your `navbar.vue` component located in the components folder. 
2. Scroll all the way down until you see `const navigation`. We will only be using the `Company` part at the end, so you can either choose to keep our current const, or remove them.
3. Change the `{ name: 'Company', href: '#' },`'s href to `/company`. It should look like this
```ts
{ name: 'Company', href: '/company' },
```
4. You should be able to navigate to `/company` now, however you can't navigate back to `/` yet by the navbar.
5. At the top, you will see this piece of code
```vue
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
```
Change the href to `/`. If you want to, you can change the image too.

---
Now, you are able to navigate back and forth between `/company` and `/`. However, you will realise that it refreshes every time you navigate. Let's fix that by converting our app to Single Page Application mode.