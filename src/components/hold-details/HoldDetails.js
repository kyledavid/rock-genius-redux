import React from 'react'
import HoldPic from './HoldPic'
import HoldDescription from './HoldDescription'
import BoulderRouteTitle from '../../containers/BoulderRouteTitle'
import { pathToImages, preLoadImages } from '../../utils/helpers'
import boulderData from '../../utils/boulders.json'

class HoldDetails extends React.Component {
  componentWillMount() {
    this.preCacheImages()
  }

  preCacheImages() {
    const boulderName = this.props.boulderName
    const routeName = this.props.routeName
    const path = pathToImages(boulderName, routeName)
    preLoadImages(boulderData[boulderName].routes[routeName]["image names"], path)
  }

  render() {
    const boulder = this.props.boulderName
    const route = this.props.routeName
    const pathTo = pathToImages(boulder, route)
    const hold = boulderData[boulder].routes[route].holds[this.props.activeHold] || {}

    return (
      <div className="shelf-outer-wrapper">
        <aside id="detail-shelf">
          <BoulderRouteTitle
            routeName={route}
            boulderName={boulder}
            boulderData={boulderData}
          />
          <div className="shelf-inner-wrapper">
            <HoldPic
              pathTo={pathTo}
              pic={hold.pic}
            />
            <HoldDescription
              activeHold={this.props.activeHold}
              description={hold.desc}
              isFoot={hold.foothold}
            />
          </div>
        </aside>
      </div>
    )
  }
}

export default HoldDetails
