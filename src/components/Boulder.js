import PropTypes from 'prop-types'
import React from 'react'
import BoulderRoute from './BoulderRoute'
import boulderImg from '../img/pearl.jpg'

const Boulder = props => (<div id="boulder-container">
  <img src={boulderImg} alt="the-pearl" />
  <BoulderRoute
    active={props.active}
    setActive={props.setActive}
    highlighted={props.highlighted}
  />
</div>
)

Boulder.propTypes = {
  active: PropTypes.number,
  setActive: PropTypes.func.isRequired,
  highlighted: PropTypes.arrayOf(PropTypes.number),
}

Boulder.defaultProps = {
  active: null,
  highlighted: null,
}

export default Boulder
