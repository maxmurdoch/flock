const colors = {
  backgrounds: {
    white: '#FFF',
    light: '#F7F7F4',
    dark: '#363636'
  },
  yellow: '#FFE001',
  dark: '#000',
  black: '#000',
  white: '#FFF'
}

const space = [0, 10, 20, 40, 60, 80, 120]

const breakpoints = ['38em', '52em', '64em']

const fontFamilies = {
  chivo: 'Chivo, sans-serif',
  itc: 'ITC, sans-serif'
}
const fontSizes = [12, 16, 20, 24, 36, 60]
const lineHeights = [0, 0, 0, 34, 44, 66]
const boxShadows = [
  '0 15px 20px rgba(0, 0, 0, 0.1), 0 2px 7px rgba(0, 0, 0, 0.1)'
]

const theme = {
  boxShadows,
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  lineHeights,
  space
}

export default theme
