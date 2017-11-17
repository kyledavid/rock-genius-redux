import PropTypes from 'prop-types'
import React from 'react'
import BoulderRoute from '../new-containers/BoulderRoute'
import boulderImg from '../img/boulders/the-pearl/pearl.jpg'

const BoulderImage = props => {
  return props.routeInfo.routeName ? (
    <div id="boulder-container">
      <img src={boulderImg} alt="the-pearl" />
      <BoulderRoute
        highlightedHolds={props.routeInfo.highlightedHolds}
        boulderData={props.boulderData}
      />
    </div>
  ) : <div id="boulder-container"><img src={boulderImg} alt="the-pearl" /></div>
}

BoulderImage.propTypes = {
  routeInfo: PropTypes.shape({
    activeHold: PropTypes.number,
    highlightedHolds: PropTypes.arrayOf(PropTypes.number),
    routeName: PropTypes.string,
  }).isRequired,
  boulderData: PropTypes.object.isRequired,
}

BoulderImage.defaultProps = {
  routeInfo: {
    active: null,
    highlighted: null,
  }
}

export default BoulderImage
