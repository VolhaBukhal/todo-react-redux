const font = 'sans-serif'

// Color palette
const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const primary = '#20b2aa'
const secondary = '#1a5350'
const accent = '#d4cece'

export const theme = {
  boxShadows: '3px 3px 5px #2e8a85',
  font: font,
  body: '#20b2aa',
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  fontWeights: [400, 700],
  borderRadius: [5, 10, 20],
  widths: [40, 50, 80, 100],
  colors: {
    primary,
    secondary,
    accent,
    black,
    white,
    error,
  },
  transition: '0.4s',
}
export type Theme = typeof theme
