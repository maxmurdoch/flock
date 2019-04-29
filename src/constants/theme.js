export const colors = {
  backgrounds: {
    white: '#FFF',
    light: '#F7F7F4',
    dark: '#363636'
  },
  yellow: '#FFE001',
  dark: '#000',
  white: '#FFF'
}

export const space = [0, 10, 20, 40, 60, 80, 120]

export const breakpoints = ['38em', '52em', '64em']

export const fontFamilies = {
  chivo: 'Chivo, sans-serif',
  itc: 'ITC, sans-serif'
}
export const fontSizes = [12, 16, 20, 24, 36, 60]
export const lineHeights = [0, 0, 0, 34, 44, 66]
export const boxShadows = [
  '0 15px 20px rgba(0, 0, 0, 0.1), 0 2px 7px rgba(0, 0, 0, 0.1)'
]

export const screenWidths = ['11rem', '15rem', '17rem']
export const phoneWidths = ['12rem', '16rem', '18rem']

const theme = {
  screenWidths,
  phoneWidths,
  boxShadows,
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  lineHeights,
  space
}

export default theme
