import BoulderDisplay from '../components/BoulderDisplay'
import { connect } from 'react-redux'
import { clearRoute, clearRouteData, fetchRouteData, sendRouteData, selectBoulder, selectRoute, setFetching } from '../actions'

// shelf breaks if I don't check for route data in addition to fetching fixed
// beta not working fixed
// have to reset route data to transition between routes in shelf fixed


const mapStateToProps = state => ({
  activeHold: state.activeHold,
  boulderName: state.boulderName,
  routeName: state.routeName,
})

const mapDispatchToProps = dispatch => ({
  clearRoute() {
    dispatch(
      clearRoute()
    )
  },
  changeRoute(name) {
    dispatch(
      selectRoute(name)
    )
  },
  sendRouteData(routeData) {
    dispatch(
      sendRouteData(routeData)
    )
  },
  selectBoulder(boulderName) {
    dispatch(
      selectBoulder(boulderName)
    )
  },
  setFetching() {
    dispatch(
      setFetching()
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoulderDisplay)
