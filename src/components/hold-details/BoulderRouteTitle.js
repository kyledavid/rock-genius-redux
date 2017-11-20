import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatBoulderName } from '../../utils/helpers'

const BoulderRouteTitle = ({routeName, boulderName, rating}) => {
  let route = routeName ? formatBoulderName(routeName) : 'null'

  return (
    <div className="boulder-name">
      <h2>{route}<span> {rating}</span></h2>
      <Link to={`/boulders/${boulderName}`}>Other Routes</Link>
    </div>
  )
}

BoulderRouteTitle.propTypes = {
  routeName: PropTypes.string.isRequired,
  boulderName: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

export default BoulderRouteTitle
