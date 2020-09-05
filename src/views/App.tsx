import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from 'views/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/"><Home/></Route>
    </BrowserRouter>
  )
}

export default App
