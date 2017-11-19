import BoulderDisplay from '../components/BoulderDisplay'
import { connect } from 'react-redux'
import { clearRoute, clearRouteData, fetchRouteData, selectBoulder, selectRoute } from '../actions'

const mapStateToProps = state => ({
  activeHold: state.activeHold,
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
  fetchRouteData(routeName) {
    dispatch(
      clearRouteData()
    )
    dispatch(
      fetchRouteData(routeName)
    )
  },
  selectBoulder(boulderName) {
    dispatch(
      selectBoulder(boulderName)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoulderDisplay)
