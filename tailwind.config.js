module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Nunito", "serif"],
      slab: ["Roboto Slab", "serif"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4935ff",
          secondary: "#0800a3",
          accent: "#85afff",
          neutral: "#f4f4f4",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
