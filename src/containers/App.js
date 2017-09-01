import React from 'react'
import Boulder from '../components/Boulder'
import Shelf from './Shelf'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 1,
    }

    this.setActive = this.setActive.bind(this)
  }

  setActive(active) {
      this.setState( (state) => {
        console.log(state.active)
        return {active: state.active === active ? null : active,}
      })
  }

  render() {
    return (
      <main className="container">
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
