import HoldDetails from '../new-components/hold-details/HoldDetails'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  return {
    boulderData: props.match
  }
}

const Container = connect(mapStateToProps)(HoldDetails)

export default Container
