import React from 'react'
import Hold from './Hold'
import {pearl} from '../utils/routes.json'
import {positionFromTop} from '../utils/helpers'

class BoulderRoute extends React.Component {

  render() {

    return (
      <div className='route'>
        {pearl.holds.map( (hold, index) => {
          let highlighted = this.props.highlighted.includes(index)
          return <Hold
            compStyle={hold.position}
            key={index}
            setActive={this.props.setActive.bind(null, index)}
            active={this.props.active === index}
            description={hold.desc}
            topDistance={positionFromTop.bind(null, index)}
            highlighted={highlighted}
          />
        })}
      </div>
    )
  }
}

export default BoulderRoute
