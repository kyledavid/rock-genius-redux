import PropTypes from 'prop-types'
import React from 'react'
import NoHold from './noHoldPic'

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
  return <NoHold />
}

HoldPic.propTypes = {
  pic: PropTypes.string,
}

HoldPic.defaultProps = {
  pic: null,
}

export default HoldPic
