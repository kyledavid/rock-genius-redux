import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import bgImage from '../img/kraft-bg3.jpg'

export default () => (
  <div className="selection-wrapper" style={{backgroundImage: `url(${bgImage})`}}>
    <div className="container">
      <h1>Choose a Boulder</h1>
      <ul className="route-list">
        <li>
          <Link to="/boulders/the pearl" >The Pearl</Link>
        </li>
      </ul>
    </div>
  </div>
)
