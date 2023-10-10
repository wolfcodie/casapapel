/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 8px 24px rgba(149, 157, 165, 0.2)",
      },
      colors: {
        pink: "#EA148C",
        blue: "#00AFEC",
        darkBlue: "#000080",
      },
      fontFamily: {
        openSans: "Open Sans",
      },
    },
  },
  plugins: [],
};
