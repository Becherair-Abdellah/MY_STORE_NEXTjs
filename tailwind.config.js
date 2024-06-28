/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        dark_primary: "var(--dark_color_primary)",
        bg_yellow: "var(--yellow-color-primary)",
        bg_2: "#6458ff",
      },
      colors:{
        color_primary: "var(--color_primary)",
        yellow: "var(--yellow-color-primary)",
        bg_2_c: "#6458ff",
      }
    },
  },
  plugins: [],
};
