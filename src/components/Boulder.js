import React from 'react'
import BoulderRoute from './BoulderRoute'
import boulderImg from '../img/pearl.jpg'

export default (props) => {
  return (
    <div id='boulder-container'>
      <img src={boulderImg} />
      <BoulderRoute
        active={props.active}
        setActive={props.setActive}
      />
    </div>
  )
}
