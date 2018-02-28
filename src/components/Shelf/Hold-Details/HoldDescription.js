import PropTypes from 'prop-types'
import React from 'react'
import { Descriptor } from '../styled'

const HoldDescription = props => (props.activeHold ? <div className="description">
  <p><span className="descriptor-label">Hold Description </span>{props.description}</p>
  <p><span className="descriptor-label">Used as foothold? </span>
    {props.isFoot ? 'Yes' : 'No'}
  </p>
</div> :
<div className="description">
  <p><Descriptor>Hold Description </Descriptor>{props.description}</p>
  <p><Descriptor>Used as foothold? </Descriptor>
  </p>
</div>
)

HoldDescription.propTypes = {
  description: PropTypes.string,
  isFoot: PropTypes.bool
}

export default HoldDescription
