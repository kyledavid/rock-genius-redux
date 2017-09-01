import React from 'react'
import Detail from '../containers/Detail'

const highlighted = {
  "backgroundColor": "green",
}

class Hold extends React.Component {

  render() {
    let compStyle = this.props.compStyle

    return (<span
      className={this.props.active && this.props.highlighted ? 'single-hold active highlighted' : this.props.active ? 'single-hold active': this.props.highlighted ? 'single-hold highlighted' : 'single-hold'}
      style={compStyle}
      onClick={this.props.setActive}
      >
        {/*<Detail
          active={this.props.active}
          topDistance={this.props.topDistance}
          description={this.props.description}
        />*/}
      </span>)
    }
  }

  export default Hold
