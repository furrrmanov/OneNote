import React from 'react'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import themes from '@/utils/theme'

export default function ThemeWrapper({ children }) {
  const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.baseTheme.background};
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  `
  const base = createMuiTheme({
    palette: {
      primary: {
        main: themes.baseTheme.primary,
      },
      secondary: {
        main: themes.baseTheme.secondary,
      },
      text: {
        primary: themes.baseTheme.text,
        secondary: themes.baseTheme.text,
      },
      background: {
        default: themes.baseTheme.background,
      },
      action: {
        selected: themes.baseTheme.secondary,
        hover: themes.baseTheme.primary,
        disabled: themes.baseTheme.elements
      },
    },
  })

  return (
    <ThemeProvider theme={themes.baseTheme}>
      <GlobalStyle />
      <MuiThemeProvider theme={base}>{children}</MuiThemeProvider>
    </ThemeProvider>
  )
}
