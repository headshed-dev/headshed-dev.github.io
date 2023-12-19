---
layout: ../../layouts/CustomMarkdown.astro
title: Hello, World
---

# Hi there!

This Markdown file creates a page at `your-domain.com/page-1/`

## another heading level 2

lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, quis aliquam lorem nisl nec nisi

It probably isn't styled much, but Markdown does support:
- **bold** and _italics._
- lists
- [links](https://astro.build)
- and more!

some bash

```bash
echo "hello world"
for i in {1..10}; do
  echo $i
done

```
this is some javascript 
```javascript
console.log('hi there ...');
for (let i = 0; i < 10; i++) {
  console.log(i);
}


```

<style>

h1 {
      font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
        font-weight: 700;


}

h1, h2, .dark p, .dark li {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
}

.dark h1, h2, .dark p, .dark li {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
}

pre {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

p {
    line-height: 1.5rem/* 24px */;
w    margin-top: 1rem;
    margin-bottom: 1rem;
}

</style>
