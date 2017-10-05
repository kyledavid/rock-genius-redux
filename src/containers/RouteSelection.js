import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

export default () => (
  <div className="shelf-outer-wrapper">
    <aside id="detail-shelf">
      <div className="shelf-inner-wrapper">
        <h1>Choose a Route</h1>
        <ul className="route-list">
          <li><Link to="/boulders/the-pearl/the pearl" >The Pearl</Link></li>
          <li><Link to="/boulders/the-pearl/the clam" >The Clam</Link></li>
        </ul>
      </div>
    </aside>
  </div>
)
