import React from 'react'
import { Grid, Card, CardContent } from '@material-ui/core'

import Appbar from 'views/Appbar'
import ColorPullet from 'views/ColorPullet'
import Canvas from 'views/Canvas'

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Appbar/>
      <Card>
        <CardContent>
          <Grid container justify="center">
            <ColorPullet/>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container justify="center">
            <Canvas/>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default Home
