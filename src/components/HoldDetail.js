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
    const pathTo = this.props.pathTo
    const hold = Boulders[boulder].routes[route].holds[this.props.active] || {}
    return (
      <div className="shelf-outer-wrapper">
        <aside id="detail-shelf">
          <div className="shelf-inner-wrapper">
            <Zoompic
              pathTo={pathTo}
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
