import { lighten } from 'polished'

const breakpoints = ['40em', '52em', '64em', '80em']

const space = [0, 4, 8, 16, 32, 64, 128, 160, 256, 296, 512]

const colors = {
  darkerBlue: '#1a8cff',
  mediumBlue: '#2F7CC9',
  lightBlue: '#49BDFF',

  lightGray: '#f2f2f2',
  darkGray: '#29313c',
  darkerGray: '#1a1f27',
  inputColor: '#D4D4D4',

  yellow: '#e0d23c',
  white: '#fff',
  darkWhite: '#D4D4D4',
  black: '#000',

  foregroundBacking: '#252B31',
  backing: '#191E23',
  darkBacking: '#171C20',

  get lightPrimary() {
    return lighten(0.04, this.darkGray)
  }
}

const colorStyles = {
  textOnPrimary: {
    color: colors.white,
    bgColor: colors.primary,
    bgColorHover: colors.lightPrimary
  }
}

const borders = {
  none: 'none',
  normal: '1px solid',
  thick: '2px solid'
}

const radii = {
  normal: '3px',
  rounded: '6px',
  curved: '40px',
  circle: '50%'
}

const fontSizes = [
  '0.702rem',
  '0.79rem',
  '.889rem',
  '1rem',
  '1.125rem',
  '1.266rem',
  '1.424rem',
  '2.027rem',
  '2.566rem',
  '3.247rem'
]

const letterSpacings = {
  normal: 0,
  slight: '.05em',
  title: '.1em',
  loose: '.25em'
}

const theme = {
  breakpoints,
  space,
  colors,
  colorStyles,
  borders,
  radii,
  fontSizes,
  letterSpacings
}

export default theme
