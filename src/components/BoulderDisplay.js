import React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import Beta from '../containers/Beta'
import BoulderImage from '../containers/BoulderImage'
import Shelf from '../components/Shelf'
import Footer from './Footer'
import boulderData from '../utils/boulders.json'
import { preLoadImages, formatBoulderName, pathToImages } from '../utils/helpers'

class BoulderDisplay extends React.Component {

  isNewRoute(newRoute, oldRoute) {
    return newRoute !== oldRoute && newRoute
  }

  handleNewRoute(routeName) {
    const { changeRoute, fetchRouteData } = this.props
    changeRoute(routeName)
    fetchRouteData(routeName)
  }

  componentWillReceiveProps(nextProps) {
    const { activeHold, routeName } = nextProps.match.params
    const { changeRoute, clearRoute, fetchRouteData } = this.props
    const oldRoute = this.props.routeName
    const noCurrentRoute = !routeName && oldRoute

    if(this.isNewRoute(routeName, oldRoute)){
      this.handleNewRoute(routeName)
    } else if(noCurrentRoute) {
      clearRoute()
    }
  }

  componentWillMount() {
    const { match, selectBoulder } = this.props
    selectBoulder(match.params.boulderName)
  }

  changeRoute(routeName) {
    const { changeRoute } = this.props
    changeRoute(routeName)
  }

  render() {
    let boulderName = this.props.boulderName ? formatBoulderName(this.props.boulderName) : null

    return (
      <main
        className="container"
      >
        <h1>
          <Link to="/"><button className="fa fa-arrow-left back-button"></button></Link>
          <span className="rock-name">{boulderName}</span>
        </h1>
        <BoulderImage />
        <Shelf
          activeHold={this.props.active}
        />
        <Beta />
        <Footer />
      </main>
    )
  }
}

BoulderDisplay.propTypes = {
  boulderName: PropTypes.string,
  changeRoute: PropTypes.func.isRequired,
  clearRoute: PropTypes.func.isRequired,
  fetchRouteData: PropTypes.func.isRequired,
  selectBoulder: PropTypes.func.isRequired,
  routeName: PropTypes.string
}

export default withRouter(BoulderDisplay)
