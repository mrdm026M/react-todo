module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "547px",
      lg: "768px",
      xl: "1024px",
      xxl: "1280px",
    },

    colors: {
      darkGrey: "#1a1a1b",
      lightGrey: "#252525",
      white: "#EEEEEE",
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
