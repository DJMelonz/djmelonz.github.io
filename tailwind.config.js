const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx'
  ],

  theme: {
    colors: {
      green: {
        DEFAULT:'#00cd81'
      }
    }
  }
};
