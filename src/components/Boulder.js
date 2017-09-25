import PropTypes from 'prop-types'
import React from 'react'
import BoulderRoute from './BoulderRoute'
import boulderImg from '../img/boulders/the-pearl/pearl.jpg'

const Boulder = props => {
  return props.routeInfo.routeName ? (
    <div id="boulder-container">
      <img src={boulderImg} alt="the-pearl" />
      <BoulderRoute
        activeHold={props.routeInfo.activeHold}
        highlightedHolds={props.routeInfo.highlightedHolds}
        routeName={props.routeInfo.routeName}
        setActive={props.routeInfo.setActive}
      />
    </div>
  ) : <div id="boulder-container"><img src={boulderImg} alt="the-pearl" /></div>
}

Boulder.propTypes = {
  routeInfo: PropTypes.shape({
    activeHold: PropTypes.number,
    highlightedHolds: PropTypes.arrayOf(PropTypes.number),
    routeName: PropTypes.string,
    setActive: PropTypes.func.isRequired,
  }).isRequired
}

Boulder.defaultProps = {
  routeInfo: {
    active: null,
    highlighted: null,
  }
}

export default Boulder
