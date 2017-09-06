import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import RouteDisplay from './RouteDisplay'
import RouteSelection from './RouteSelection'

const App = () => (
  <div>
    <Route exact path="/" component={RouteSelection} />
    <Route path="/route/:routename" component={RouteDisplay} />
  </div>
)

export default App
