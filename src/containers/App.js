import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import BoulderSelection from './BoulderSelection'
import BoulderDisplay from './BoulderDisplay'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={BoulderSelection} />
      <Route path="/boulders/:boulder" component={BoulderDisplay} />
    </div>
  </BrowserRouter>
)

export default App
