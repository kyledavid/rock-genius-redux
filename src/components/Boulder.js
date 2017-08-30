import React from 'react'
import BoulderRoute from './BoulderRoute'
import boulderImg from '../img/pearl.jpg'

export default () => {
  return (
    <div id='boulder-container'>
      <img src={boulderImg} />
      <BoulderRoute />
    </div>
  )
}
