import React from 'react'
import PropTypes from 'prop-types'
import HoldPic from './HoldPic'
import HoldDescription from './HoldDescription'
import BoulderRouteTitle from '../../../containers/BoulderRouteTitle'
import { pathToImages, preLoadImages } from '../../../utils/helpers'

class HoldDetails extends React.Component {
  componentDidUpdate(prevProps) {
    if(!prevProps.routeData && this.props.routeData) {
      this.preCacheImages()
    }
  }

  preCacheImages() {
    const { boulderName, routeName, routeData } = this.props
    const path = pathToImages(boulderName, routeName)
    const imageNames = routeData["imageNames"]
    preLoadImages(imageNames, path)
  }

  getActiveHold() {
    const { activeHold, routeData } = this.props
    return routeData ? routeData['holds'][activeHold] : null
  }

  render() {
    const { activeHold, boulderName, routeName } = this.props
    const pathTo = pathToImages(boulderName, routeName)
    const hold = this.getActiveHold()

    return (
      <div className="shelf-outer-wrapper">
        <aside id="detail-shelf">
          <BoulderRouteTitle
            routeName={routeName}
            boulderName={boulderName}
          />
          <div className="shelf-inner-wrapper">
            <HoldPic
              pathTo={pathTo}
              pic={hold ? hold.pic : null}
            />
            <HoldDescription
              activeHold={activeHold}
              description={hold ? hold.desc : null}
              isFoot={hold ? hold.foothold : null}
            />
          </div>
        </aside>
      </div>
    )
  }
}

HoldDetails.propTypes = {
  activeHold: PropTypes.number,
  boulderName: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
  routeData: PropTypes.object
}

export default HoldDetails
