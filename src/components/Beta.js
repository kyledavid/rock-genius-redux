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
            style={chunk.activeHolds ? {backgroundColor: '#eee',} : null}
            className={this.props.activeBeta === index ? 'selected-beta' : null}
            onClick={(e) => {
              this.props.updateHighlights(chunk.activeHolds, e)
              this.props.setActiveBeta(index, e)
            }}
            >{chunk.chunk}</a>
        })}</p>
      </div>
    )
  }
}

export default Beta
