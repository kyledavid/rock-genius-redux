import React from 'react'
import Boulder from '../components/Boulder'
import Shelf from './Shelf'
import imageNames from '../utils/image-names.json'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 1,
    }

    this.setActive = this.setActive.bind(this)
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

        />
        <Shelf
          active={this.state.active}
        />
      </main>
    )
  }
}
