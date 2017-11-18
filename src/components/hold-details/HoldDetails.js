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
    const { boulderName, routeName, routeData } = this.props
    const path = pathToImages(boulderName, routeName)
    preLoadImages(routeData["image names"], path)
  }

  render() {
    const { activeHold, boulderName, routeName, routeData } = this.props
    const pathTo = pathToImages(boulderName, routeName)
    const hold = routeData['holds'][activeHold] || {}

    return (
      <div className="shelf-outer-wrapper">
        <aside id="detail-shelf">
          <BoulderRouteTitle
            routeName={routeName}
            boulderName={boulderName}
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
