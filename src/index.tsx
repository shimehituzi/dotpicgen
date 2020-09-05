import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createMuiTheme, colors, ThemeProvider, CssBaseline } from '@material-ui/core'
import { store } from 'state'
import App from 'views/App'

const theme = createMuiTheme({
  palette: {
    primary: colors.lightBlue,
    secondary: colors.yellow,
    error: colors.red,
    background: {
      default: colors.blueGrey.A700
    }
  },
})

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>
  </ThemeProvider>
  , document.getElementById('root')
)
