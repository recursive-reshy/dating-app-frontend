import React from 'react'

// MUI Core
import { ThemeProvider } from '@mui/material/styles'

import './App.css'

import theme from './theme'

import { Header, DatingCard, SwipeButtons } from './components'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <DatingCard />
        <SwipeButtons />
      </div>
    </ThemeProvider>
  )
}

export default App
