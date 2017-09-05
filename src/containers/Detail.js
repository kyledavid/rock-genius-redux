/* NOT IN CURRENT USE */

import React from 'react'
import ZoomPic from '../components/Zoompic'
import Descriptor from '../components/Descriptor'

class Detail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      closeToTop: false,
    }
  }

  componentDidMount() {
    this.setDistanceFromTop()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.closeToTop && this.props.active || this.props.active !== nextProps.active
  }

  setDistanceFromTop() {
    const closeToTop = this.props.topDistance()

    this.setState({
      closeToTop,
    })
  }

  render() {
    let elementClasses = 'detail-container'
    if (this.props.active) elementClasses += ' active'
    if (this.state.closeToTop) elementClasses += ' hang-from-top'
    return (
      <div className={elementClasses}>
        <ZoomPic />
        <Descriptor description={this.props.description}/>
      </div>
    )
  }
}

export default Detail
