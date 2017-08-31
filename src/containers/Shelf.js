import React from 'react'
import Zoompic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'

class Shelf extends React.Component {
  render() {
    return (
      <aside id="detail-shelf">
        <Zoompic />
        <Descriptor />
      </aside>
    )
  }
}

export default Shelf
