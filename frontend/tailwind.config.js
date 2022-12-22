/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        serif: ['var(--font-noto-serif-jp)'],
        sans: ['var(--font-noto-sans-jp)'],
        script: ['var(--font-oooh-baby)']
      }
    },
  },
  plugins: [],
}
