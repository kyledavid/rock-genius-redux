import PropTypes from 'prop-types'
import React from 'react'
import Boulders from '../utils/boulders.json'

const Beta = props => {
  const { activeBeta, routeData, routeName } = props
  if (routeData.beta && routeName) {
    let highlightedHolds = routeData['beta'][activeBeta]
    return (<div className="beta" id="beta">
      <h3>Problem Beta</h3>
      <p>
        {routeData.beta.map((chunk, index) => (<span
          key={index}
          style={chunk.activeHolds ? { backgroundColor: '#eee' } : null}
          className={activeBeta === index ? 'selected-beta' : null}
          onClick={(e) => {
            props.updateHighlights(chunk.activeHolds, e)
            props.setActiveBeta(index, e)
          }}
        >
          {chunk.chunk}</span>),
        )}
      </p>
    </div>
    )
  } else {
    return <div></div>
  }
}
Beta.propTypes = {
  activeBeta: PropTypes.number,
  boulderData: PropTypes.object.isRequired,
}

Beta.defaultProps = {
  activeBeta: null,
}

export default Beta
