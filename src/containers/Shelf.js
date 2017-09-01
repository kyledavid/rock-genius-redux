import React from 'react'
import Zoompic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'
import {pearl} from '../utils/routes.json'

class Shelf extends React.Component {
  render() {
    let hold = pearl.holds[this.props.active]
    return this.props.active !== null ? (
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

    ) : <aside id="detail-shelf"></aside>

    return <div></div>
  }
}

export default Shelf
