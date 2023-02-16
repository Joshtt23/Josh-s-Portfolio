/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myPurple": "#8860D0",
        "myGrey": "#C1C8E4",
        "myCyan": "#5AB9EA",
        "myLightBlue": "#84CEEB",
        "myBlue": "#5680E9"
      },
      fontFamily: {
        lobster: ['Lobster', "sans-serif"]
      }
    },
  },
  plugins: [],
};
