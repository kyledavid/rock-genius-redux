import BoulderRouteTitle from '../components/hold-details/BoulderRouteTitle'
import { connect } from 'react-redux'
import { selectRoute } from '../actions'

const mapStateToProps = (state) => ({
  routeName: state.routeName,
  rating: state.routeData.rating,
  boulderName: state.boulderName
})

const mapDispatchToProps = dispatch => ({
  changeRoute(name) {
    dispatch(
      selectRoute(name)
    )
  }
})

export default connect(mapStateToProps)(BoulderRouteTitle)
