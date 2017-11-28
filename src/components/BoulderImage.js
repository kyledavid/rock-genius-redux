import PropTypes from 'prop-types'
import React from 'react'
import BoulderRoute from '../containers/BoulderRoute'
import boulderImg from '../img/boulders/the-pearl/pearl.jpg'

const BoulderImage = props => {
  return !props.fetching && props.routeName ? (
    <div id="boulder-container">
      <img src={boulderImg} alt="the-pearl" />
      <BoulderRoute />
    </div>
  ) : <div id="boulder-container"><img src={boulderImg} alt="the-pearl" /></div>
}

BoulderImage.propTypes = {
  fetching: PropTypes.bool,
  routeName: PropTypes.string,
}

export default BoulderImage
