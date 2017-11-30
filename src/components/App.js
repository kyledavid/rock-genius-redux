import React, { Component } from 'react'
import { BrowserRouter, Link, Route, withRouter } from 'react-router-dom'
import BoulderSelection from './BoulderSelection'
import BoulderDisplay from '../containers/BoulderDisplay'

class App extends Component {
  componentWillMount() {
    // ping the app every 5 minutes
      setInterval(function() {
          http.get("http://historical-chart.herokuapp.com");
      }, 300000)
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={BoulderSelection} />
          <Route path="/boulders/:boulderName/:routeName?" component={BoulderDisplay} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
