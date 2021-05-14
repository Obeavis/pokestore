module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fire: "#df3102",
        water: "#3394f6",
        grass: "#75c435",
        electric: "#fbbc12",
        "gray-default": "#eaeaea",
        "gray-default-light": "#f6f6f6",
      },
      height: {
        "35-rem": "35rem",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      rotate: ["group-hover"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
