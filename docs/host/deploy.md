# Deploying your website on Netlify
This is the final step! Once you have deployed you can take a look at your new website and customize it all you like
## Instructions
1. Head over to [Netlify's website](https://www.netlify.com/) and click either `Log in` if you have an account or `Sign up` if you don't have an account.
2. In the Netlify Dashboard, click on `Add new site` in the `Sites` widget

![host-deploy01](/host-deploy01.png)

3. Select `Import an existing project`
4. Select `Deploy with GitHub`, then log in to your GitHub account and allow the necessary permissions. You should see an `Authorized` page once it's successful
5. Find for your repository name. Mines was named `nuxt01`, this varies on what you named it at the start of the workshop.
:::info
If your repository shows `Vue` underneath it, don't worry! Nuxt is based on Vue
:::
6. After clicking on your repository, find for `Publish directory`, set it from `.nuxt/dist` to `dist` and click `Deploy`. Now, your site should be deploying. You can get a custom subdomain by changing your site name (top widget > `Domain settings` > `Production domains` widget > `Options` and `Edit site name` )
7. Your website should be deployed by now! There should be a link at the top widget which would lead you to your new website

---
Congratulations! You have come to the end of making and deploying your very own Nuxt website! I hope that this documentation has been useful for you and would help you in your future endeavours. If you have any questions, once again message me on Discord, and if you spot any typos or mistakes, press `Edit this page on GitHub` to help out! Thank you so much, have a nice day ahead <3