import { connect } from 'react-redux'
import BoulderImage from '../components/BoulderImage'

const mapStateToProps = ({ fetching, routeName }) => ({
  fetching,
  routeName,
})

const mapDispatchToProps = (dispatch) => {
  return null
}

export default connect(mapStateToProps)(BoulderImage)
