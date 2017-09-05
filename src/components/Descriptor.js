import PropTypes from 'prop-types'
import React from 'react'

const Descriptor = props => (<div className="description">
  <p><span className="descriptor-label">Description </span>{props.description}</p>
  <p><span className="descriptor-label">Used as foothold? </span>
    {props.isFoot ? 'Yes' : 'No'}
  </p>
</div>)

Descriptor.propTypes = {
  description: PropTypes.string,
  isFoot: PropTypes.bool,
}

Descriptor.defaultProps = {
  isFoot: null,
  description: null,
}

export default Descriptor
