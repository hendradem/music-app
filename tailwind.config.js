/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {},
};
