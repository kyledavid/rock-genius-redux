import React from 'react'
import Zoompic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'
import {pearl} from '../utils/routes.json'

class Shelf extends React.Component {
  render() {
    let hold = pearl[this.props.active]
    return (
      <aside id="detail-shelf">
        <div className="shelf-inner-wrapper">
          <Zoompic
            pic={hold.pic}
          />
          <Descriptor
            description={hold.desc}
          />
        </div>
      </aside>
    )
  }
}

export default Shelf
