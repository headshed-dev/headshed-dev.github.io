---
layout: "../../layouts/CustomMarkdown.astro"
title: "python virtual environments"
image: astro-saucer.webp
---

# TL;DR

with node.js installed, you can get started with Astro as simply as :

```bash
npm create astro@latest
```

accepting all defaults and giving it a name of your choice.

# Why Astro ?

Astro is a relatively new static site generator. It has its own approach to building static sites and has a component based approach that is similar to React.

It is capable of using React components and other frameworks such as Svelte and Vue but out of the box it creates a very fast, lean and efficient development environment that is capable of creating static sites that are very fast and efficient. The subsequent website that is created often contains little or no JavaScript and is SEO friendly, fast and efficient.

The cost of deployment is also very low as it is possible to deploy the site to a CDN such as Cloudflare Pages or Netlify and have the site served from a CDN for free.

Astro will, if configured to do so, serve server side rendered content and can also be used to serve API endpoints. Amazingly, in its default static mode of operations, API endpoints can be created statically, so long as the content it serves is static and do not need any kind of mutations from the client. 

Astro may be configured also to serve client side Javascript, React components and other frameworks such as Svelte and Vue using an 'Island' architecture. So it is not true to say that we are limited to creating purely static sites with Astro.

Up to now, we have used Gatsby for similar reasons to those outlined above. Gatsby is a very capable static site generator and has a very large community of developers and a very large ecosystem of plugins and themes. It is also capable of creating very fast and efficient static sites that are SEO friendly and can be deployed to a CDN for free.

However, Astro has proven for us to be a more efficient approach when requirements fit what Astro does with little modification or configuratoin.

There's no such thing as a free lunch, and Astro is no exception. It is a relatively new static site generator and as such, it has a smaller community of developers and a smaller ecosystem of plugins and themes. It is also not as mature as Gatsby and as such, it is not as capable as Gatsby in some areas. Some applications may be better suited to Gatsby than Astro.

If your interested to give Astro a go, with [node.js](https://nodejs.org/en/download) installed, you can get started with Astro as simply as :

```bash
npm create astro@latest
```

accepting all defaults and giving it a name of your choice.

if you followed the above, you will already have modules installed ready to go and be able to start up an Astro development server with:

```bash
npm run dev
```

and build a production ready static site with:

```bash
npm run build
```

test out the production build with:

```bash
npx serve dist
```

and deploy to a CDN such as Cloudflare Pages or Netlify.

It is common to use other peoples templates and themes. 

One such is [astro-tailwind-flowbite-template](https://github.com/leabs/astro-tailwind-flowbite-template) by [leabs](https://github.com/leabs) which quite frankly is, I have found a joy to work with. 

For the most part, the project is editted by changing values in it's `sites.json` making it a no brainer to rapidly configure a site to your needs.

Most of the functionality is in 'components' and where appprriate, we can change values in some of these in the 'head matter' of the component.

Astro is a no nonsense, pragmatic framework in my way of thinking and as long as you are using it for straightforward purposes, it is a pleasure to work with.

If your interested to see what we'e done with Leabs work so far, the code for this site is at [headshed-dev.github.io](https://github.com/headshed-dev/headshed-dev.github.io)