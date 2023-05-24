/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
        maxWidth : {
            "container" : "400px" 
        }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

