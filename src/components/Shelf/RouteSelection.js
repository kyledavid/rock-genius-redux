import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Instructions, ShelfInnerWrapper, ShelfOuterWrapper } from './styled'

class RouteSelection extends React.Component {
  render() {
    return (
      <ShelfOuterWrapper>
        <aside id="detail-shelf">
          <ShelfInnerWrapper>
            <Instructions>Choose a Route</Instructions>
            <ul className="route-list">
              <li><Link to="/boulders/the pearl/the pearl" >The Pearl</Link></li>
              <li><Link to="/boulders/the pearl/the clam" >The Clam</Link></li>
            </ul>
          </ShelfInnerWrapper>
        </aside>
      </ShelfOuterWrapper>
    )
  }
}

export default RouteSelection
