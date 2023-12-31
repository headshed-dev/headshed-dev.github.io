import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/utills/readingtime";

const owner = "astrojs";
// https://astro.build/config
export default defineConfig({
  site: 'https://headshed.dev',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },  
});

/*
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
});
*/