/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#282829",
      white: "#f5f4f5",
      orange: "#ed7c50",
      darkorange: "#d96d43",
      purple: "#8566f6",
      turks: "#a6e2e3",
      red: "#e46060",
      darkgrey: "#595959",
      lightgrey: "#8a8a8a",
      green: "#43ae61",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
