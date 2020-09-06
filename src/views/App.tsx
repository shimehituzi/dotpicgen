import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from 'views/Home'
import Test from 'views/Test'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/"><Home/></Route>
      <Route path="/test"><Test/></Route>
    </BrowserRouter>
  )
}

export default App
