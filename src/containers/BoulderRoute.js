import React from 'react'
import { connect } from 'react-redux'
import BoulderRoute from '../components/BoulderRoute'
import { selectHold } from '../actions'

const mapStateToProps = ({ activeHold, boulderName, routeName, routeData }) => ({
  activeHold,
  boulderName,
  routeData,
  routeName,
})

const mapDispatchToProps = (dispatch) => ({
   selectHold(index, event) {
     event.stopPropagation()
     dispatch(
       selectHold(index)
     )
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoulderRoute)
