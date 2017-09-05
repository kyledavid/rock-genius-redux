import React from 'react'
import Beta from '../components/Beta'
import Boulder from '../components/Boulder'
import Shelf from './Shelf'
import imageNames from '../utils/image-names.json'
import { preLoadImages } from '../utils/helpers'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 1,
      highlightedHolds: [],
      activeBeta: null,
    }

    this.setActive = this.setActive.bind(this)
    this.highLightHolds = this.highLightHolds.bind(this)
    this.setActiveBeta = this.setActiveBeta.bind(this)
  }

  componentDidMount() {
    preLoadImages(imageNames)
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

  render() {
    return (
      <main
        className="container"
        onClick={this.setActive.bind(null, null)}
      >
        <Boulder
          active={this.state.active}
          setActive={this.setActive}
          highlighted={this.state.highlightedHolds}

        />
        <Shelf
          active={this.state.active}
        />
        <Beta
          updateHighlights={this.highLightHolds}
          setActiveBeta={this.setActiveBeta}
          activeBeta={this.state.activeBeta}
        />
      </main>
    )
  }
}
