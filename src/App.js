import React from 'react'

import { ThemeProvider } from '@mui/material/styles'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './App.css'

import theme from './theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Dating App</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
