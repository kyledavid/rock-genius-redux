import React from 'react'
import Beta from '../components/Beta'
import Boulder from '../components/Boulder'
import Shelf from './Shelf'
import imageNames from '../utils/image-names.json'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 1,
      highlightedHolds: [1,3,4]
    }

    this.setActive = this.setActive.bind(this)
    this.highLightHolds = this.highLightHolds.bind(this)
  }

  highLightHolds(holdList) {
    console.log('i did thangs')
    console.log(holdList)
    this.setState({
      highlightedHolds: holdList
    })
  }

  preLoadImages() {
    imageNames.map( (name) => {
      let image = new Image()
      image.src = require(`../img/${name}`)
      return image
    })
  }

  componentDidMount() {
    this.preLoadImages()
  }

  setActive(active, event) {
    event.stopPropagation()
      this.setState( (state) => {
        console.log(state.active)
        return {active: state.active === active ? null : active,}
      })
  }

  render() {
    return (
      <main className="container"
        onClick={this.setActive.bind(null, null)}>
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
        />
      </main>
    )
  }
}
