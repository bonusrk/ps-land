const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(({ addComponents }) => {
      const components = {
        '.container': {
          '@screen xs': {
            maxWidth: '440px'
          },
          '@screen sm': {
            maxWidth: '750px'
          },
          '@screen md': {
            maxWidth: '1000px'
          },
          '@screen lg': {
            maxWidth: '1200px'
          },
          '@screen xl': {
            maxWidth: '1100px'
          }
        }
      }
      addComponents(components)
    })
  ]
}
