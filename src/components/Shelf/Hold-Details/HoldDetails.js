import React from 'react'
import PropTypes from 'prop-types'
import HoldPic from './HoldPic'
import HoldDescription from './HoldDescription'
import BoulderRouteTitle from '../../../containers/BoulderRouteTitle'
import { pathToImages, preLoadImages } from '../../../utils/helpers'
import { DetailShelf, ShelfInnerWrapper, ShelfOuterWrapper } from '../styled'

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
      <ShelfOuterWrapper>
        <DetailShelf>
          <BoulderRouteTitle
            routeName={routeName}
            boulderName={boulderName}
          />
          <ShelfInnerWrapper>
            <HoldPic
              pathTo={pathTo}
              pic={hold ? hold.pic : null}
            />
            <HoldDescription
              activeHold={activeHold}
              description={hold ? hold.desc : null}
              isFoot={hold ? hold.foothold : null}
            />
          </ShelfInnerWrapper>
        </DetailShelf>
      </ShelfOuterWrapper>
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
