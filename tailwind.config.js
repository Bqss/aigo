/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
        maxWidth : {
            "container" : "400px" 
        },
        fontFamily : {
            "noto-sans" : "Noto Sans , sans-serif",
        }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tailwind-scrollbar")
  ],
}

