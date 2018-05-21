const colors = {
  text: {
    primary: '#000',
  },
  backgrounds: {
    light: '#F7F7F4',
  },
  yellow: '#FFE001',
  black: '#000',
  white: '#FFF',
}
// Breakpoints
const breakpoints = ['40em', '52em', '64em']
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

// Typographic Scale (numbers are converted to px values)
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]

// Spacing Scale (used for margin and padding)
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const theme = {
  colors,
  space,
  fontSizes,
  breakpoints,
}

export default theme
