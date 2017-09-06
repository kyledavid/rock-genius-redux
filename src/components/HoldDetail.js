import React from 'react'
import Zoompic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'
import { pearl } from '../utils/routes.json'

export default ( {active} ) => {
  const hold = pearl.holds[active] || {}
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
