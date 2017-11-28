import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatBoulderName } from '../../utils/helpers'

const BoulderRouteTitle = ({routeName, boulderName, routeData}) => {
  let route = routeName ? formatBoulderName(routeName) : 'null'

  return (
    <div className="boulder-name">
      <h2>{route}<span> {routeData ? routeData.rating : null}</span></h2>
      <Link to={`/boulders/${boulderName}`}>Other Routes</Link>
    </div>
  )
}

BoulderRouteTitle.propTypes = {
  routeName: PropTypes.string.isRequired,
  boulderName: PropTypes.string.isRequired,
  routeData: PropTypes.object
}

export default BoulderRouteTitle
