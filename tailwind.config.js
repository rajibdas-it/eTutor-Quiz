/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#785cb5",

          secondary: "#47b5c1",

          accent: "#447add",

          neutral: "#1A262E",

          "base-100": "#3D3B54",

          info: "#7B8DEA",

          success: "#167466",

          warning: "#F4C61F",

          error: "#E67095",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
