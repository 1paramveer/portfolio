/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "335px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // added custom colors here
    colors: {
      tblack: "#282829",
      twhite: "#f5f4f5",
      torange: "#ed7c50",
      tdarkorange: "#d96d43",
      tpurple: "#8566f6",
      tturks: "#a6e2e3",
      tred: "#e46060",
      tdarkgrey: "#595959",
      tlightgrey: "#8a8a8a",
      tgreen: "#43ae61",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // added custom fonts here
      fontFamily: {
        inter: ["var(--font-inter)"],
        jetbrains: ["var(--font-jetbrains)"],
        sonder: ["var(--font-sonder)"],
      },
    },
  },
  plugins: [],
};
