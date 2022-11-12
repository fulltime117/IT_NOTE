import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import { ThemeProvider } from './contexts/ThemeContext'
import theme from './theme.json'

const RouteApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

const wrapper = document.getElementById('root')
ReactDOM.render(<RouteApp />, wrapper)