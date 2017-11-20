import PropTypes from 'prop-types'
import React from 'react'

const Hold = (props) => {
  const compStyle = props.compStyle

  const handleClick = (e) => {
    const {active, deselectHold, setActive} = props
    e.preventDefault()
    if(active) {
      deselectHold()
    } else {
      setActive()
    }
  }
  return (
    <span
      role="button"
      className={props.active && props.highlighted ? 'single-hold active highlighted' : props.active ? 'single-hold active': props.highlighted ? 'single-hold highlighted' : 'single-hold'}
      style={compStyle}
      onClick={handleClick}
      tabIndex={0}
    >
    </span>
  )
}

Hold.propTypes = {
  active: PropTypes.bool.isRequired,
  compStyle: PropTypes.shape({
    bottom: PropTypes.string,
    left: PropTypes.string,
  }).isRequired,
  highlighted: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
}

export default Hold
