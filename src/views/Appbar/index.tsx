import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Appbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="textSecondary">
          ドット絵ジェネレーター
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
