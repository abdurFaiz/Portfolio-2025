/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["OpenSans"],
        LibreBaskerville: ["LibreBaskerville"],
      },
      colors: {
        accent: "#F24E1E",
        dark: "#060606",
        light: "#F0F0F0",
        grayMist: "#909090",
        greyDark: "#2e2e2e",
        greyCardDard: "#1B1B1B",
      },
      animation: {
        slide: "slide 0.5s ease-in-out",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100%)" },
          "51%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
