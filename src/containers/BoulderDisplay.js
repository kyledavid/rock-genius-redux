import BoulderDisplay from '../components/BoulderDisplay'
import { connect } from 'react-redux'
import { clearRoute, clearRouteData, fetchRouteData, sendRouteData, selectBoulder, selectRoute } from '../actions'

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
      clearRouteData()
    )
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
