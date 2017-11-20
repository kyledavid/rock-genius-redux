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
  activeBeta: PropTypes.number,
  activeHold: PropTypes.number,
  boulderName: PropTypes.string.isRequired,
  deselectHold: PropTypes.func.isRequired,
  routeName: PropTypes.string.isRequired,
  routeData: PropTypes.object,
  selectHold: PropTypes.func.isRequired
}

export default BoulderRoute
