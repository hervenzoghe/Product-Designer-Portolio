/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 
    './node_modules/flowbite/**/*.js'
  ],
  theme: { 
    colors: {
      'shade' : '#F5FCFF',
      'primary-violet' : '#5E3BEE',
      'dribble' : '#E62872',
      'heading' : '#282938',
      'body' : '#1C1E53',
      'default' : '#FFFFFF',
      'secondary' : '#ECFFFD', 
      'black' : '#000000',
      'vert' : '#006B6A'
    },
    extend: {
      fontFamily : {
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

