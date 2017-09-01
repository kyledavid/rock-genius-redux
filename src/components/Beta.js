import React from 'react'
import {pearl} from '../utils/routes.json'

class Beta extends React.Component {
  render() {
    return (
      <div className="beta">
        <h3>Problem Beta</h3>
        <p>{pearl.beta}</p>
      </div>
    )
  }
}

export default Beta
