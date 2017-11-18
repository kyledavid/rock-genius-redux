import HoldDetails from '../components/hold-details/HoldDetails'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  return {
    activeHold: state.activeHold,
    boulderData: props.match,
    boulderName: state.boulderName,
    routeName: state.routeName
  }
}

const Container = connect(mapStateToProps)(HoldDetails)

export default Container
