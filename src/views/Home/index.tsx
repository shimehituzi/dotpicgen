import React from 'react'

import Appbar from 'views/Appbar'
import ColorPullet from 'views/ColorPullet'

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Appbar />
      <ColorPullet />
    </React.Fragment>
  )
}

export default Home
