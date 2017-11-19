import React from 'react'
import FontAwesome from 'react-fontawesome'
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

  noCurrentRoute(routeName, oldRoute) {
    return !routeName && oldRoute
  }

  componentWillReceiveProps(nextProps) {
    const { activeHold, routeName } = nextProps.match.params
    const { changeRoute, clearRoute, fetchRouteData } = this.props
    const oldRoute = this.props.routeName

    if(this.isNewRoute(routeName, oldRoute)){
      this.handleNewRoute(routeName)
    } else if(this.noCurrentRoute(routeName, oldRoute)) {
      clearRoute()
    }
  }

  componentWillMount() {
    const { history, match, selectBoulder } = this.props
    selectBoulder(match.params.boulderName)
    /*this.unlisten = history.listen((location, action) => {
      //this.changeRoute()
    }).bind(this)*/
  }

/*  componentWillUnmount() {
    this.unlisten()
  }
*/
  changeRoute() {

    const { routeName } = this.props.match.params
    const { changeRoute } = this.props
    if(routeName){changeRoute(routeName)}
  }

  render() {
    let boulderName = formatBoulderName(this.props.match.params.boulderName)

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

export default withRouter(BoulderDisplay)
