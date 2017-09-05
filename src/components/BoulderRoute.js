import PropTypes from 'prop-types'
import React from 'react'
import Hold from './Hold'
import { pearl } from '../utils/routes.json'
import { positionFromTop } from '../utils/helpers'

const BoulderRoute = props => (
  <div className="route">
    {pearl.holds.map((hold, index) => {
      const highlighted = props.highlighted.includes(index)
      return (
        <Hold
          compStyle={hold.position}
          key={index}
          setActive={e => props.setActive(index, e)}
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
