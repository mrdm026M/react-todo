module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    sm: "440px",
    // => @media (min-width: 440px) { ... }

    md: "547px",
    // => @media (min-width: 547px) { ... }

    lg: "768px",
    // => @media (min-width: 768px) { ... }

    xl: "1024px",
    // => @media (min-width: 1024px) { ... }

    xxl: "1280px",
    // => @media (min-width: 1280px) { ... }
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
