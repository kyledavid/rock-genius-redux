import PropTypes from 'prop-types'
import React from 'react'
import { Description, Descriptor } from '../styled'

const HoldDescription = props => (props.activeHold ? <Description>
  <p><Descriptor>Hold Description </Descriptor>{props.description}</p>
  <p><Descriptor>Used as foothold? </Descriptor>
    {props.isFoot ? 'Yes' : 'No'}
  </p>
</Description> :
<Description>
  <p><Descriptor>Hold Description </Descriptor>{props.description}</p>
  <p><Descriptor>Used as foothold? </Descriptor>
  </p>
</Description>
)

HoldDescription.propTypes = {
  description: PropTypes.string,
  isFoot: PropTypes.bool
}

export default HoldDescription
