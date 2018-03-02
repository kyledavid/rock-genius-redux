import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { DetailShelf, Instructions, RouteList, ShelfInnerWrapper, ShelfOuterWrapper } from './styled'

class RouteSelection extends React.Component {
  render() {
    return (
      <ShelfOuterWrapper>
        <DetailShelf>
          <ShelfInnerWrapper>
            <Instructions>Choose a Route</Instructions>
            <RouteList>
              <li><Link to="/boulders/the pearl/the pearl" >The Pearl</Link></li>
              <li><Link to="/boulders/the pearl/the clam" >The Clam</Link></li>
            </RouteList>
          </ShelfInnerWrapper>
        </DetailShelf>
      </ShelfOuterWrapper>
    )
  }
}

export default RouteSelection
