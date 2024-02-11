---
title: Dependency Hell
author: Jon Brookes
isDraft: false
publishedDate: 02-11-2024
tags:
  - Web Development
  - JavaScript
  - Astro
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
canonicalURL: https://localhost:3000/blog/blog-post-1
---

To begin this log of messages over time, as a code wrangler and DevOps person, I had to implement staging in which to check and preview code and content changes of [headshed.dev](https://www.headshed.dev) itself. In the midst of this nasty breakages were manifest, making the approach's validity again clear. 

![busted](/images/broken_navbar_astro.png)

A broken navbar discovered after a hasty upgrade to all @latest". 

The burger should be top right, but it is not and tapping on it flashes up the menu momentarily before disappearing again. A bit more caution could have prevented this before blasting all packages to be @latest.

Rollback is the only way forward, resistence is futile.

In this Astro project, several components are malfunctioning, particularly Astro and Flowise. However, Astro seems to be the root cause

To pinpoint the problem in the npm-based project, we'll need to compare the package list before the @latest upgrade (when the navbar worked) with the current list (with the broken navbar).

Therefore, we'll need to upgrade packages in a controlled, step-by-step manner, using the following approach...

```bash
npm outdated
Package                Current  Wanted  Latest  Location                            Depended by
@astrojs/tailwind        5.0.3   5.1.0   5.1.0  node_modules/@astrojs/tailwind      headshed-dev.github.io-rollback2
astro                    4.0.1   4.3.5   4.3.5  node_modules/astro                  headshed-dev.github.io-rollback2
flowbite                 1.8.1   1.8.1   2.2.1  node_modules/flowbite               headshed-dev.github.io-rollback2
prettier                 3.1.0   3.2.5   3.2.5  node_modules/prettier               headshed-dev.github.io-rollback2
prettier-plugin-astro   0.12.2  0.12.3  0.13.0  node_modules/prettier-plugin-astro  headshed-dev.github.io-rollback2
tailwindcss              3.3.6   3.4.1   3.4.1  node_modules/tailwindcss            headshed-dev.github.io-rollback2
```

We can identify the packages causing the navbar issue, but pinpointing the culprit remains the challenge.

Here's a reminder when checking out older branches: any changes in your IDE after checkout might still be present even if you revert to a "known good point." These changes were made after you initially checked out the branch.

Discarding these changes with Git:

Option 1:

Use `git checkout -- path/to/file` (replace with actual file path).

Option 2:

Right-click the file in VS Code and choose "Discard Changes."

Caution: This command will permanently remove all changes in these files.

and removing the `node_modules` directory 

and here is the command equivalent to the above

```bash
  rm -rf node_modules
  git checkout -- package-lock.json
  git checkout -- packages.json
```


To fully restore the working state, I ran npm install and then checked with npm run dev to confirm the navbar was functioning again.

Success! The navbar is restored, and we're back in business. The gremlins, or perhaps some "skills issues" as the Primeagen might say, are gone. All hail the [Primeagen!](https://www.youtube.com/results?search_query=theprimeagen)

Now, 1 at a time we can upgrade the packages to the latest version and check the navbar after each upgrade.

`npm install tailwindcss@latest`

`npm install @astrojs/tailwind@latest`

`npm install prettier@latest prettier-plugin-astro@latest -D`

each time checking with `npm run dev` to see if the navbar is still working and it is.

```bash
❯ npm outdated
Package   Current  Wanted  Latest  Location               Depended by
astro       4.0.1   4.3.5   4.3.5  node_modules/astro     headshed-dev.github.io-rollback2
flowbite    1.8.1   1.8.1   2.2.1  node_modules/flowbite  headshed-dev.github.io-rollback2
```

Now we are left with the 2 packages that are not yet updated, so we can try flowbite first:

`npm install flowbite@latest`

Again, checking with `npm run dev` to see if the navbar is still working and it still is. Huzzah!

To summarize, the navbar malfunction seems to have occurred between versions 4.0 and 4.1.3. By testing minor and patch versions within this range, I found that everything up to and including 4.0.5 maintains a functional navbar.

This leaves all other packages at their latest versions, except for the one I'm most interested in upgrading.

```bash
❯ npm outdated
Package  Current  Wanted  Latest  Location            Depended by
astro      4.0.5   4.3.5   4.3.5  node_modules/astro  headshed-dev.github.io-rollback2
```

Next steps will be to ascertain what broke in Astro post to `4.0.5` for my use case and what can be done to fix it. There could be strange side effects with other packages and there is a major release of `flowbite` to consider, but for now, the navbar is working again and I can continue with other pressing work.




