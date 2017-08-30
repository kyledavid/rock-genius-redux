import React from 'react'
import ZoomPic from '../components/ZoomPic'
import Descriptor from '../components/Descriptor'

export default (props) => <div className={props.active ?
  'detail-container active' :
  'detail-container'}>
  <ZoomPic />
  <Descriptor />
</div>
