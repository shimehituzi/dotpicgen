import { createMuiTheme, colors } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: colors.blue,
    secondary: colors.yellow,
    error: colors.red,
    background: {
      default: colors.blueGrey.A100
    },
    type: "light"
  },
})

export default theme
