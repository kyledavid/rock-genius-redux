import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Link, withRouter } from 'react-router-dom'
import Beta from '../components/Beta'
import Boulder from '../components/Boulder'
import Shelf from './Shelf'
import Footer from '../components/Footer'
import boulderData from '../utils/boulders.json'
import { preLoadImages, formatBoulderName, pathToImages } from '../utils/helpers'

class BoulderDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: null,
      highlightedHolds: [],
      activeBeta: null,
      boulderName: '',
      routeName: '',
    }

    this.setActive = this.setActive.bind(this)
    this.highLightHolds = this.highLightHolds.bind(this)
    this.setActiveBeta = this.setActiveBeta.bind(this)
    this.setBoulderName = this.setBoulderName.bind(this)
    this.resetBeta = this.resetBeta.bind(this)
  }

  componentWillMount() {
    const {history} = this.props

    this.unlisten = history.listen((location, action) => {
      this.resetBeta()
    }).bind(this)
  }

  componentWillUnmount() {
    this.unlisten()
  }

  resetBeta() {
    this.setState({
      activeBeta: null,
      highlightedHolds: [],
    })
  }
  setActiveBeta(activeBeta) {
    this.setState(state => (
      {
        activeBeta: state.activeBeta === activeBeta ? null : activeBeta,
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
    if (event) {
      event.stopPropagation()
    }
    this.setState(state => (
      {
        highlightedHolds: state.highlightedHolds === holdList ? [] : holdList,
      }),
    )
  }

  setBoulderName(boulder) {
    this.setState({
      boulderName: boulder,
    })
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
            routeName: this.props.match.params.routeName,
            setActive: this.setActive,
          }}
          boulderData={boulderData}
        />
        <Shelf
          active={this.state.active}
        />
        <Beta
          routeName={this.props.match.params.routeName}
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
