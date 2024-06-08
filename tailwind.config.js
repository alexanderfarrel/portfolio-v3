/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["sans-serif"],
      },
    },
    screens: {
      sm: { max: "640px" },
      md: { min: "641px", max: "768px" },
      lg: { min: "769px", max: "1024px" },
      xl: { min: "1025px", max: "1280px" },
      "2xl": { min: "1281px", max: "1536px" },
      cs1: { min: "1537px", max: "1368px" },
    },
  },
  plugins: [],
};
