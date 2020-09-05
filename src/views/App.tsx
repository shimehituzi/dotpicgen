import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from 'views/Home'
import Example from 'views/Example'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/"><Home/></Route>
      <Route path='/Example'><Example/></Route>
    </BrowserRouter>
  )
}

export default App
