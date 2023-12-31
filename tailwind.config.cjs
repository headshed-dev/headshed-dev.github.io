/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      serif: ['Poppins', ...defaultTheme.fontFamily.serif],
      mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
    },

    colors: {
      primary: "#17202A",
      secondary: "#ecc94b",
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      stone: colors.stone,
      blue: colors.blue,
      green: colors.green,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      translate: ["dark"],
    },
  },
  plugins: [require("flowbite/plugin"), require('@tailwindcss/typography'),
  ],
};
