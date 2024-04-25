/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/images/hero-mobile.jpg')",
        "hero-desktop": "url('/images/hero-desktop.jpg')",
        "pattern-desktop": "url('/images/bg-pattern-desktop.svg')",
      },
      fontFamily: {
        JosefinSans: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
