import PropTypes from 'prop-types'
import React from 'react'
import NoHold from './noHoldPic'

const Zoompic = (props) => {
  const imgName = props.pic

  if (props.pic) {
    return (
      <div className="zoom-pic">
        <img src={imgName ? require(`../img/${imgName}`) : null} alt="Boulder Hold" />
      </div>
    )
  }
  return <NoHold />
}

Zoompic.propTypes = {
  pic: PropTypes.string,
}

Zoompic.defaultProps = {
  pic: null,
}

export default Zoompic
