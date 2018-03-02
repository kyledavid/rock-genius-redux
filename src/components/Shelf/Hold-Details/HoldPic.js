import PropTypes from 'prop-types'
import React from 'react'
import { NoHold, ShelfContent } from '../styled'

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
      <NoHold>
        No Hold Selected
      </NoHold>
    </ShelfContent>
  )
}

HoldPic.propTypes = {
  pic: PropTypes.string,
}

export default HoldPic
