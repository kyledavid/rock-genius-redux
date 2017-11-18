import PropTypes from 'prop-types'
import React from 'react'
import Hold from './Hold'

const BoulderRoute = ({ boulderData, highlightedHolds, activeHold, boulderName, routeName, selectHold }) => (
  <div className="route">
    {boulderData["the pearl"].routes[routeName].holds.map((hold, index) => {
      const highlighted = highlightedHolds.includes(index)
      return (
        <Hold
          active={activeHold === index}
          compStyle={hold.position}
          highlighted={highlighted}
          key={index}
          setActive={selectHold.bind(null, index)}
        />
      )
    })}
  </div>
)

BoulderRoute.propTypes = {
  activeHold: PropTypes.number,
  highlightedHolds: PropTypes.arrayOf(PropTypes.number),
  boulderName: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  selectHold: PropTypes.func.isRequired,
  boulderData: PropTypes.object.isRequired,
}

BoulderRoute.defaultProps = {
  activeHold: null,
  highlightedHolds: null,
}

export default BoulderRoute
