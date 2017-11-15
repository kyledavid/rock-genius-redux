import PropTypes from 'prop-types'
import React from 'react'

const HoldDescription = props => (props.active ? <div className="description">
  <p><span className="descriptor-label">Hold Description </span>{props.description}</p>
  <p><span className="descriptor-label">Used as foothold? </span>
    {props.isFoot ? 'Yes' : 'No'}
  </p>
</div> :
<div className="description">
  <p><span className="descriptor-label">Hold Description </span>{props.description}</p>
  <p><span className="descriptor-label">Used as foothold? </span>
  </p>
</div>
)

HoldDescription.propTypes = {
  description: PropTypes.string,
  isFoot: PropTypes.bool
}

HoldDescription.defaultProps = {
  description: null,
  isFoot: null
}

export default HoldDescription
