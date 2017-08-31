import React from 'react'
import Zoompic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'
import {pearl} from '../utils/routes.json'

class Shelf extends React.Component {
  render() {
    let hold = pearl[this.props.active]
    return (
      <aside id="detail-shelf">
        <Zoompic
          pic={hold.pic}
        />
        <Descriptor
          description={this.props.active ? hold.desc : null}
        />
      </aside>
    )
  }
}

export default Shelf
