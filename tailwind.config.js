// https://github.com/tailwindlabs/tailwindcss/discussions/1077#discussioncomment-528222
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const range = require("lodash/range");

let spacing = {};

range(0, 10, 0.25).map((num) => (spacing[num] = num * 8));
range(10, 121, 1).map((num) => (spacing[num] = num * 8));

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing,
    extend: {
      colors: {
        primary: "var(--primary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
