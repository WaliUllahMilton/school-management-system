/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing : {
        "container" : "1024px"
      },
      fontFamily : {
        "roboto" : ["Roboto", "sans-serif"]
      },
      backgroundImage : {
        "background": "linear-gradient(90deg, hsla(299, 34%, 53%, 1) 7%, hsla(169, 93%, 49%, 1) 92%)",
        "hover": "linear-gradient(360deg, hsla(299, 34%, 53%, 1) 7%, hsla(169, 93%, 49%, 1) 92%)",

      }
    },
  },
  plugins: [],
}