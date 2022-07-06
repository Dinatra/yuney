module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        radicalRed: "#FF304F",
        prussianBlue: "#002651",
        royalBlue: "#3D5AF1",
        mediumPurple: "#775ADA",
        cloudBurst: "#23265B",
        mineShaft: "#322F2F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
