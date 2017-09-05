import PropTypes from 'prop-types'
import React from 'react'

const Zoompic = (props) => {
  const imgName = props.pic
  const imgPath = `../img/${imgName}`
  return (
    <div className="zoom-pic">
      <img src={imgName ? require(`../img/${imgName}`) : null} alt="Boulder Hold" />
    </div>
  )
}

Zoompic.propTypes = {
  pic: PropTypes.string,
}

Zoompic.defaultProps = {
  pic: null,
}

export default Zoompic
