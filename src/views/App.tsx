import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from 'views/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/"><Home/></Route>
    </BrowserRouter>
  )
}

export default App
