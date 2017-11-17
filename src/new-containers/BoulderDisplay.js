import BoulderDisplay from '../new-components/BoulderDisplay'
import { connect } from 'react-redux'
import { selectBoulder, selectRoute } from '../actions'

const mapDispatchToProps = dispatch => ({
  changeRoute(name) {
    dispatch(
      selectRoute(name)
    )
  },
  changeBoulder(name) {
    dispatch(
      selectBoulder(name)
    )
  }
})

export default connect(null, mapDispatchToProps)(BoulderDisplay)
