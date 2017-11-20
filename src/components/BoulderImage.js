import PropTypes from 'prop-types'
import React from 'react'
import BoulderRoute from '../containers/BoulderRoute'
import boulderImg from '../img/boulders/the-pearl/pearl.jpg'

const BoulderImage = props => {
  return props.routeName ? (
    <div id="boulder-container">
      <img src={boulderImg} alt="the-pearl" />
      <BoulderRoute />
    </div>
  ) : <div id="boulder-container"><img src={boulderImg} alt="the-pearl" /></div>
}

BoulderImage.propTypes = {
  routeName: PropTypes.string,
}

export default BoulderImage
