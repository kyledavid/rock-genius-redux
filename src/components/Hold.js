import React from 'react'
import Detail from '../containers/Detail'

export default (props) => <span
  className={props.active ? 'single-hold active': 'single-hold'}
  style={props.compStyle}
  onClick={props.setActive}
  >

    <Detail active={props.active}/>
  </span>
