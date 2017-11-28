import { connect } from 'react-redux'
import Beta from '../components/Beta'
import { clearBeta, selectBeta } from '../actions'

const mapStateToProps = state => ({
  activeBeta: state.activeBeta,
  fetching: state.fetching,
  routeData: state.routeData,
  routeName: state.routeName
})

const mapDispatchToProps = dispatch => ({
  clearBeta() {
    dispatch(
      clearBeta()
    )
  },
  selectBeta(betaIndex, e) {
    e.preventDefault()
    dispatch(
      selectBeta(betaIndex)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Beta)
