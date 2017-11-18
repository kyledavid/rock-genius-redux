import BoulderDisplay from '../components/BoulderDisplay'
import { connect } from 'react-redux'
import { clearRoute, fetchRouteData, selectBoulder, selectRoute } from '../actions'

const mapStateToProps = state => ({
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
  changeBoulder(name) {
    dispatch(
      selectBoulder(name)
    )
  },
  fetchRouteData(routeName) {
    dispatch(
      fetchRouteData(routeName)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoulderDisplay)
