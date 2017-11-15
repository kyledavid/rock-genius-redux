import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {formatBoulderName} from '../../utils/helpers'

const BoulderRouteTitle = ({routeName, boulderName, boulderData, rating, changeRoute}) => {
  let route = formatBoulderName(routeName)

  return (
    <div className="boulder-name">
      <h2>{route}<span> {rating}</span></h2>
      <button onClick={()=> changeRoute('the girl')}>The Girl</button>
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
