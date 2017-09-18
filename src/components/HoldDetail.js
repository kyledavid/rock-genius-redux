import React from 'react'
import Zoompic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'
import Boulders from '../utils/boulders.json'

class HoldDetail extends React.Component {
  componentDidMount() {
    const route = this.props.match.params.route
    this.props.setRouteName('the pearl')
  }


  render() {
    const boulder = this.props.match.params.boulder
    const route = this.props.match.params.route
    const hold = Boulders[boulder].routes[route].holds[this.props.active] || {}
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
}

export default HoldDetail
