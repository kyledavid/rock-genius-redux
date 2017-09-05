import PropTypes from 'prop-types'
import React from 'react'
import Zoompic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'
import { pearl } from '../utils/routes.json'

const Shelf = (props) => {
  const hold = pearl.holds[props.active] || {}
  return (
    <div className="shelf-outer-wrapper">
      <aside id="detail-shelf">
        <div className="shelf-inner-wrapper">
          <Zoompic
            pic={hold.pic}
          />
          <Descriptor
            description={hold.desc}
            isFoot={hold.foothold}
          />
        </div>
      </aside>
    </div>
  )
}

Shelf.propTypes = {
  active: PropTypes.number,
}

Shelf.defaultProps = {
  active: null,
}

export default Shelf
