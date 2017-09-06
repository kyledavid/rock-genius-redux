import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import BoulderSelection from './BoulderSelection'
import BoulderDisplay from './BoulderDisplay'

const App = () => (
  <div>
    <Route exact path="/" component={BoulderSelection} />
    <Route path="/boulder/:bouldername" component={BoulderDisplay} />
  </div>
)

export default App
