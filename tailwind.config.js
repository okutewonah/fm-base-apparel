/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/src/images/hero-mobile.jpg')",
        "hero-desktop": "url('/src/images/hero-desktop.jpg')",
        "pattern-desktop": "url('/src/images/bg-pattern-desktop.svg')",
      },
      fontFamily: {
        JosefinSans: ['"Josefin Sans"', "sans-serif"],
      },
      colors: {
        // Colors

        // Primary

        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",

        // Neutral

        "dark-grayish-red": "hsl(0, 6%, 24%)",

        // Gradients

        "linear-135deg-start": "hsl(0, 0%, 100%)",
        "linear-135deg-stop": "hsl(0, 100%, 98%)",
        "linear-135-deg-start": "hsl(0, 80%, 86%)",
        "linear-135-deg-stop": "hsl(0, 74%, 74%)",
      },
    },
  },
  plugins: [],
};
