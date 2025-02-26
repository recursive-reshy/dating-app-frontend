import { createTheme } from '@mui/material/styles'

const theme = createTheme( {
  spacing: 4,
  palette: {
    type: 'light',
    primary: {
      main: '#D64550',
      light: '#F4A7B9',
      dark: '#922635',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1FA9A6',
      light: '#A9E0DE',
      dark: '#126B68',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5E6DA',
    },
    text: {
      primary: '#2E2E2E',
      secondary: '#805D4A',
      hint: '#B9A394',
    },
    error: {
      main: '#E63946',
      light: '#F8B2B8',
      dark: '#A12028',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFA726',
      light: '#FFE0B2',
      dark: '#EF6C00',
      contrastText: '#FFFFFF',
    },
  },
} )

export default theme