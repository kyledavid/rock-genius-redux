import React from 'react'
import {pearl} from '../utils/routes.json'

class Beta extends React.Component {
  render() {
    return (
      <div className="beta" id="beta">
        <h3>Problem Beta</h3>
        <p>{pearl.beta.map( (chunk, index) => {
          return <a href="#beta"
            key={index}
            style={chunk.activeHolds ? {backgroundColor: 'rgb(255,255,150)',} : null}
            onClick={this.props.updateHighlights.bind(null, chunk.activeHolds)}
            >{chunk.chunk}</a>
        })}</p>
      </div>
    )
  }
}

export default Beta
