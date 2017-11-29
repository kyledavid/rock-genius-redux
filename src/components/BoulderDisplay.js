import React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import Beta from '../containers/Beta'
import BoulderImage from '../containers/BoulderImage'
import Shelf from '../containers/Shelf'
import Footer from './Footer'
import boulderData from '../utils/boulders.json'
import { preLoadImages, formatBoulderName, pathToImages } from '../utils/helpers'

class BoulderDisplay extends React.Component {

  isNewRoute(newRoute, oldPropsRoute, newPropsRoute) {
    const isNew = (newRoute !== oldPropsRoute && newRoute !== undefined && newPropsRoute === null)
    return isNew
  }

  handleNewRoute(routeName) {
    const { changeRoute, setFetching } = this.props

    changeRoute(routeName)
    setFetching()
    this.fetchRouteFromApi(routeName)
  }

  fetchRouteFromApi(routeName) {
    const endpoint = 'http://localhost:8000/get-data/' + routeName
    const { sendRouteData } = this.props

    fetch(endpoint).then(response => {
      return response.json()
    }).then(convertedBody => {
      sendRouteData(convertedBody[0])
    })
  }

  componentWillReceiveProps(nextProps) {
    const { activeHold, routeName } = nextProps.match.params
    const { changeRoute, clearRoute, fetching } = this.props
    const oldPropsRoute = this.props.routeName
    const newPropsRoute = nextProps.routeName
    const noCurrentRoute = routeName === undefined && newPropsRoute !== null

    if(this.isNewRoute(routeName, oldPropsRoute, newPropsRoute)){
      this.handleNewRoute(routeName)
    } else if(noCurrentRoute) {
      clearRoute()
    }
  }

  componentWillMount() {
    const { match, selectBoulder, setFetching } = this.props
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
  selectBoulder: PropTypes.func.isRequired,
  setFetching: PropTypes.func.isRequired,
  routeName: PropTypes.string
}

export default withRouter(BoulderDisplay)
