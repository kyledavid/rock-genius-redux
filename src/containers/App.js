import React from 'react'
import Boulder from '../components/Boulder'

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
        return {active: state.active === active ? null: active,}
      })
  }

  render() {
    return (
      <section>
        <Boulder
          active={this.state.active}
          setActive={this.setActive}
        />
      </section>
    )
  }
}
