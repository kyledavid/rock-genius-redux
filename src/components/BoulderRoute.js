import PropTypes from 'prop-types'
import React from 'react'
import Hold from './Hold'
import Boulders from '../utils/boulders.json'

const BoulderRoute = ({activeHold, highLightHolds, routeName, setActive}) => (
  <div className="route">
    {Boulders.the-pearl.routes[routeName].holds.map((hold, index) => {
      const highlighted = highlighted.includes(index)
      return (
        <Hold
          active={activeHold === index}
          compStyle={hold.position}
          highlighted={highlighted}
          key={index}
          setActive={setActive.bind(null, index)}
        />
      )
    })}
  </div>
)

BoulderRoute.propTypes = {
  activeHold: PropTypes.number,
  highlightedHolds: PropTypes.arrayOf(PropTypes.number),
  routeName: PropTypes.string,
  setActive: PropTypes.func.isRequired,
}

BoulderRoute.defaultProps = {
  activeHold: null,
  highlightedHolds: null,
}

export default BoulderRoute
