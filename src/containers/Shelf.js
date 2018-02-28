import { connect } from 'react-redux'
import Shelf from '../components/Shelf/Shelf'

const mapStateToProps = state => ({
  activeHold: state.activeHold,
  fetching: state.fetching,
  routeData: state.routeData
})

export default connect(mapStateToProps)(Shelf)
