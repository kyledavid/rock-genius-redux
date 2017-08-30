import React from 'react'
import Hold from './Hold'

const positions = [
  {
    bottom: '130px',
    left: '322px',
  },
  {
    bottom: '177px',
    left: '255px',
  },
  {
    bottom: '270px',
    left: '312px',
  },
  {
    bottom: '330px',
    left: '252px',
  },
  {
    bottom: '130px',
    left: '322px',
  }
]

export default () => <div>{positions.map( (position) => <Hold compStyle={position} />)}</div>
