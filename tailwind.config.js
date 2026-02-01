/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false, // prevents Tailwind base reset for legacy template compatibility
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
