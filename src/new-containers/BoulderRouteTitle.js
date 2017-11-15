import BoulderRouteTitle from '../new-components/hold-details/BoulderRouteTitle'
import { connect } from 'react-redux'
import { selectRoute } from '../actions'

const mapStateToProps = (state) => ({
  routeName: state.routeName,
  rating: state.routeData.rating,
  boulderName: state.boulderName
})

/*const mapDispatchToProps = dispatch => {
  return {
    changeRoute(name) {
      dispatch(
        selectRoute(name)
      )
    }
  }
}*/

const mapDispatchToProps = dispatch => ({
  changeRoute(name) {
    dispatch(
      selectRoute(name)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoulderRouteTitle)
