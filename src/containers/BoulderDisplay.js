import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Link, withRouter } from 'react-router-dom'
import Beta from '../components/Beta'
import Boulder from '../components/Boulder'
import Shelf from './Shelf'
import Footer from '../components/Footer'
import boulderData from '../utils/boulders.json'
import { preLoadImages, formatBoulderName } from '../utils/helpers'

class BoulderDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 1,
      highlightedHolds: [],
      activeBeta: null,
      boulderName: '',
      routeName: '',
    }

    this.setActive = this.setActive.bind(this)
    this.highLightHolds = this.highLightHolds.bind(this)
    this.setActiveBeta = this.setActiveBeta.bind(this)
    this.setBoulderName = this.setBoulderName.bind(this)
    this.setRouteName = this.setRouteName.bind(this)
    this.pathToImages = this.pathToImages.bind(this)
    this.preCacheImages = this.preCacheImages.bind(this)
  }

  componentDidMount() {
    const boulder = this.props.match.params.boulder
    this.setBoulderName(boulder)
  }

  componentDidUpdate() {
    if (this.state.routeName) {
      this.preCacheImages()
    }
  }

  componentWillMount() {
    const {history} = this.props

    this.unlisten = history.listen((location, action) => {
      let routeName = location.pathname.slice(20)

      this.setRouteName(routeName)
    }).bind(this)
  }

  componentWillUnmount() {
    this.unlisten()
  }

  setActiveBeta(active) {
    this.setState(state => (
      {
        activeBeta: state.activeBeta === active ? null : active,
      }),
    )
  }

  setActive(active, event) {
    event.stopPropagation()
    this.setState(state => (
      { active: state.active === active ? null : active }
    ),
    )
  }

  highLightHolds(holdList, event) {
    event.stopPropagation()
    this.setState(state => (
      {
        highlightedHolds: state.highlightedHolds === holdList ? [] : holdList,
      }),
    )
  }

  setBoulderName(boulder) {
    this.setState({
      boulderName: boulder,
      active: 1,
    })
  }

  setRouteName(route) {
    this.setState({
      routeName: route,
      active: 1,
    })
  }

  pathToImages() {
    const boulderName = this.state.boulderName
    const routeName = this.state.routeName
    const path = boulderName + '/' + routeName + '/'

    return path
  }

  preCacheImages() {
    const boulderName = this.state.boulderName
    const route = this.state.routeName
    const path = this.pathToImages(route)
    preLoadImages(boulderData[boulderName].routes[route]["image names"], path)
  }

  render() {
    let boulderName = formatBoulderName(this.props.match.params.boulder)
    return (
      <main
        className="container"
        onClick={(e) => this.setActive(null, e)}
      >

        <h1>
          <Link to="/"><button className="fa fa-arrow-left back-button"></button></Link>
          <span className="rock-name">{boulderName}</span>
        </h1>
        <Boulder
          routeInfo={{
            activeHold: this.state.active,
            highlightedHolds: this.state.highlightedHolds,
            routeName: this.state.routeName,
            setActive: this.setActive,
          }}
          boulderData={boulderData}
        />
        <Shelf
          active={this.state.active}
          setRouteName={this.setRouteName}
          pathTo={this.pathToImages}
          boulderData={boulderData}
          boulderName={this.state.boulderName}
          routeName={this.state.routeName}
        />
        <Beta
          routeName={this.state.routeName}
          updateHighlights={this.highLightHolds}
          setActiveBeta={this.setActiveBeta}
          activeBeta={this.state.activeBeta}
          boulderData={boulderData}
        />
        <Footer
        />
      </main>
    )
  }
}

export default withRouter(BoulderDisplay)
