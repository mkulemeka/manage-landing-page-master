/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      tabletPattern: "url('./src/images/bg-tablet-pattern.svg')",
      simplifyMobile: "url('./src/images/bg-simplify-section-mobile.svg')",
      simplifyDesktop: "url('./src/images/bg-simplify-section-desktop.svg')",
    },
    colors: {
      brightRed: "hsl(12, 88%, 59%)",
      darkBlue: "hsl(228, 39%, 23%)",
      darkGrayishBlue: "hsl(227, 12%, 61%)",
      veryDarkBlue: "hsl(233, 12%, 13%)",
      veryPaleRed: "hsl(13, 100%, 96%)",
      veryLightGray: "hsl(0, 0%, 98%)",
      transparent: "transparent",
    },
    fontFamily: {
      beVietnamPro: ["Be Vietnam Pro", "sans-serif"],
    },
    fontWeight: {
      400: 400,
      500: 500,
      700: 700,
    },
    fontSize: {
      12: "0.75rem",
      16: "1rem",
      18: "1.125rem",
      24: "1.5rem",
      subHeading: "2.25rem",
    },
    screens: {
      sm: "430px",
      md: "768px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
