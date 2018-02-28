import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import styled from 'styled-components'

const ShelfWrapper = styled.div`
display: flex;
flex-direction: column;
height: 574px;
padding-top: .5em;
`

const Instructions = styled.h2`
height: 1.87em;
line-height: 1.15em;
margin-top: 1em;
margin-bottom: 0;
background-color: #fff;
padding: 0 1em;
`

class RouteSelection extends React.Component {
  render() {
    return (
      <div className="shelf-outer-wrapper">
        <aside id="detail-shelf">
          <ShelfWrapper>
            <Instructions>Choose a Route</Instructions>
            <ul className="route-list">
              <li><Link to="/boulders/the pearl/the pearl" >The Pearl</Link></li>
              <li><Link to="/boulders/the pearl/the clam" >The Clam</Link></li>
            </ul>
          </ShelfWrapper>
        </aside>
      </div>
    )
  }
}

export default RouteSelection
