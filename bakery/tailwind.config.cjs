/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bakery: {
          primary: "#ccb096",
          light: "#deccba",
          dark: "#7d664f",
        },
      },
    },
  },
  plugins: [],
};
