import React from 'react'
import Hold from './Hold'
import {pearl} from '../utils/routes.json'
import {positionFromTop} from '../utils/helpers'

export default (props) => {
  return (
    <div className='route'>
      {pearl.holds.map( (hold, index) => {
        return <Hold
          compStyle={hold.position}
          key={index}
          setActive={props.setActive.bind(null, index)}
          active={props.active === index}
          description={hold.desc}
          topDistance={positionFromTop.bind(null, index)}
        />
      })}
    </div>
  )
}
