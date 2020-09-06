import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline, Container } from '@material-ui/core'
import { store } from 'state'

import App from 'views/App'
import theme from 'theme'

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline/>
      <Container maxWidth="sm">
        <App/>
      </Container>
    </Provider>
  </ThemeProvider>
  , document.getElementById('root')
)
