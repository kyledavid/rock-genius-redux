import PropTypes from 'prop-types'
import React from 'react'

const HoldPic = (props) => {
  const imgName = props.pic
  const path = props.pathTo + imgName

  if (props.pic) {
    return (
      <div className="zoom-pic">
        <img src={imgName ? require(`../../img/boulders/${path}`) : null} alt="Boulder Hold" />
      </div>
    )
  }
  return (
    <div className="zoom-pic">
      <p className="no-hold">
        No Hold Selected
      </p>
    </div>
  )
}

HoldPic.propTypes = {
  pic: PropTypes.string,
}

export default HoldPic
