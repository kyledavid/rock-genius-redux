import PropTypes from 'prop-types'
import React from 'react'
import Hold from './Hold'
import Boulders from '../utils/boulders.json'
import { positionFromTop } from '../utils/helpers'

/*const BoulderRoute = props => (
  <div>
    {console.log(Boulders.pearl.routes['the pearl'])}
    <h1>Bla bla bla</h1>
  </div>
)*/

const BoulderRoute = props => (
  <div className="route">
    {Boulders.pearl.routes[props.routeName].holds.map((hold, index) => {
      const highlighted = props.highlighted.includes(index)
      return (
        <Hold
          compStyle={hold.position}
          key={index}
          setActive={props.setActive.bind(null, index)}
          active={props.active === index}
          description={hold.desc}
          topDistance={() => positionFromTop(index)}
          highlighted={highlighted}
        />
      )
    })}
  </div>
)

BoulderRoute.propTypes = {
  highlighted: PropTypes.arrayOf(PropTypes.number),
  setActive: PropTypes.func.isRequired,
  active: PropTypes.number,
}

BoulderRoute.defaultProps = {
  active: null,
  highlighted: null,
}

export default BoulderRoute
