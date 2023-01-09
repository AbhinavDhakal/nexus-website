/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],

  fontFamily: {
    sans: ["ui-sans-serif", "system-ui"],
    serif: ["ui-serif", "Georgia"],
    mono: ["ui-monospace", "SFMono-Regular"],
    display: ["Oswald"],
    body: ['"Open Sans"'],
    poppins: ["Poppins", "ui-sans-serif", "system-ui"],
  },
};
