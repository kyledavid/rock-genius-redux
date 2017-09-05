import PropTypes from 'prop-types'
import React from 'react'
import { pearl } from '../utils/routes.json'

const Beta = props => (<div className="beta" id="beta">
  <h3>Problem Beta</h3>
  <p>
    {pearl.beta.map((chunk, index) => (<a
      href="#beta"
      key={index}
      style={chunk.activeHolds ? { backgroundColor: '#eee' } : null}
      className={props.activeBeta === index ? 'selected-beta' : null}
      onClick={(e) => {
        props.updateHighlights(chunk.activeHolds, e)
        props.setActiveBeta(index, e)
      }}
    >
      {chunk.chunk}</a>),
    )}
  </p>
</div>
)

Beta.propTypes = {
  activeBeta: PropTypes.number,
}

Beta.defaultProps = {
  activeBeta: null,
}

export default Beta
