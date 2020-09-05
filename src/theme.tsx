import { createMuiTheme, colors } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: colors.lightBlue,
    secondary: colors.yellow,
    error: colors.red,
    background: {
      default: colors.blueGrey.A700
    },
    type: "dark"
  },
})

export default theme
