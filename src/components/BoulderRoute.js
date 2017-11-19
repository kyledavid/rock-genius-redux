import PropTypes from 'prop-types'
import React from 'react'
import Hold from './Hold'

const BoulderRoute = ({ activeBeta, activeHold, boulderName, deselectHold, routeName, routeData, selectHold }) => (
  <div className="route">
    {routeData ? routeData.holds.map((hold, index) => {
      const highlightedHolds = routeData.beta && activeBeta !== null ? routeData['beta'][activeBeta]['activeHolds'] : []
      const highlighted = highlightedHolds.includes(index)
      return (
        <Hold
          active={activeHold === index}
          compStyle={hold.position}
          deselectHold={deselectHold}
          highlighted={highlighted}
          key={index}
          setActive={selectHold.bind(null, index)}
        />
      )
    }) : null}
  </div>
)

BoulderRoute.propTypes = {
  activeHold: PropTypes.number,
  highlightedHolds: PropTypes.arrayOf(PropTypes.number),
  boulderName: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  selectHold: PropTypes.func.isRequired,
}

BoulderRoute.defaultProps = {
  activeBeta: 0,
  activeHold: null,
  highlightedHolds: null,
}

export default BoulderRoute
