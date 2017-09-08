import React from 'react'
import Zoompic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'
import Boulders from '../utils/boulders.json'

export default ( {active} ) => {
  const hold = Boulders.pearl.routes['the pearl'].holds[active] || {}
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
