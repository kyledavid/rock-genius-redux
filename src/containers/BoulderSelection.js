import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

export default () => (
  <div className="container">
    <h1>Choose a Boulder</h1>
    <ul className="route-list">
      <li>
        <Link to="/boulders/pearl" >The Pearl</Link>
      </li>
    </ul>
  </div>
)
