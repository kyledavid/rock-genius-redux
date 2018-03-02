import PropTypes from 'prop-types'
import React from 'react'
import { ShelfContent } from '../styled'

const HoldPic = (props) => {
  const imgName = props.pic
  const path = props.pathTo + imgName

  if (props.pic) {
    return (
      <ShelfContent>
        <img src={imgName ? require(`../../../img/boulders/${path}`) : null} alt="Boulder Hold" />
      </ShelfContent>
    )
  }
  return (
    <ShelfContent>
      <p className="no-hold">
        No Hold Selected
      </p>
    </ShelfContent>
  )
}

HoldPic.propTypes = {
  pic: PropTypes.string,
}

export default HoldPic
