import React from 'react'
import { BrowserRouter, Link, Route, withRouter } from 'react-router-dom'
import BoulderSelection from './BoulderSelection'
import BoulderDisplay from '../containers/BoulderDisplay'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={BoulderSelection} />
      <Route path="/boulders/:boulder/:routeName?" component={BoulderDisplay} />
    </div>
  </BrowserRouter>
)

export default App
