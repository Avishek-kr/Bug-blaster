/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /(bg|border|ring)-(red|green|purple|teal|yellow|orange)-(400|500|600)/,
      variants: ["checked", "focus"],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}