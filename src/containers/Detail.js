import React from 'react'
import ZoomPic from '../components/ZoomPic'
import Descriptor from '../components/Descriptor'

class Detail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      closeToTop: false
    }
  }

  componentDidMount() {
    let closeToTop = this.props.topDistance()

    this.setState({
      closeToTop
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.closeToTop && this.props.active || this.props.active !== nextProps.active
  }

  render() {
    {console.log('rendered')}
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
