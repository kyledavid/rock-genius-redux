import BoulderDisplay from '../new-components/BoulderDisplay'
import { connect } from 'react-redux'
import { selectRoute } from '../actions'

const mapDispatchToProps = dispatch => ({
  changeRoute(name) {
    dispatch(
      selectRoute(name)
    )
  }
})

export default connect(null, mapDispatchToProps)(BoulderDisplay)
