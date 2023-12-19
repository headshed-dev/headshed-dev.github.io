---
layout: ../../layouts/Layout.astro

title: Hello, World
---

# Hi there!

This Markdown file creates a page at `your-domain.com/page-1/`

It probably isn't styled much, but Markdown does support:
- **bold** and _italics._
- lists
- [links](https://astro.build)
- and more!

some bash

```bash
echo "hello world"
```
this is some javascript 
```javascript
console.log('hi there ...');

```

<style>
p {
    --tw-text-opacity: 1;
    /* color: rgb(55 65 81 / var(--tw-text-opacity)); */
    color: red;
}

p :is(.dark .dark\:text-gray-400) {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
}
</style>