import PropTypes from 'prop-types'
import React from 'react'
import Hold from './Hold'

const BoulderRoute = ({activeHold, boulderData, highlightedHolds, routeName, setActive}) => (
  <div className="route">
    {boulderData["the pearl"].routes[routeName].holds.map((hold, index) => {
      const highlighted = highlightedHolds.includes(index)
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
  boulderData: PropTypes.object.isRequired,
}

BoulderRoute.defaultProps = {
  activeHold: null,
  highlightedHolds: null,
}

export default BoulderRoute
