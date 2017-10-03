import React from 'react'
import Zoompic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'
import RouteName from '../components/RouteName'

class HoldDetail extends React.Component {
  componentWillMount() {
    const route = this.props.match.params.route
    this.props.setRouteName(route)
  }

  render() {
    const boulder = this.props.match.params.boulder
    const route = this.props.match.params.route
    const pathTo = this.props.pathTo()
    const hold = this.props.boulderData[boulder].routes[route].holds[this.props.active] || {}
    return (
      <div className="shelf-outer-wrapper">
        <aside id="detail-shelf">
          <RouteName
            routeName={route}
            boulderName={boulder}
            boulderData={this.props.boulderData}
          />
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
