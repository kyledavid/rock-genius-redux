import PropTypes from 'prop-types'
import React from 'react'
/* import Detail from '../containers/Detail'

 const highlighted = {
  backgroundColor: 'green',
} */

const Hold = (props) => {
  const compStyle = props.compStyle
  return (
    <span
      role="button"
      className={props.active && props.highlighted ? 'single-hold active highlighted' : props.active ? 'single-hold active': props.highlighted ? 'single-hold highlighted' : 'single-hold'}
      style={compStyle}
      onClick={props.setActive}
      tabIndex={0}
    >
      {/* <Detail
        active={props.active}
        topDistance={props.topDistance}
        description={props.description}
      /> */}
    </span>
  )
}

Hold.propTypes = {
  active: PropTypes.bool,
  compStyle: PropTypes.shape({
    bottom: PropTypes.string,
    left: PropTypes.string,
  }).isRequired,
  highlighted: PropTypes.bool,
  setActive: PropTypes.func.isRequired,
}

Hold.defaultProps = {
  active: null,
  highlighted: null,
}

export default Hold
