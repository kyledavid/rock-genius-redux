import HoldDetails from '../components/Shelf/Hold-Details/HoldDetails'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
  return {
    activeHold: state.activeHold,
    routeData: state.routeData,
    boulderName: state.boulderName,
    routeName: state.routeName
  }
}

const Container = connect(mapStateToProps)(HoldDetails)

export default Container
