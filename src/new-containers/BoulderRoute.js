import React from 'react'
import { connect } from 'react-redux'
import BoulderRoute from '../new-components/BoulderRoute'
import selectHold from '../actions'

const mapStateToProps = ({boulderName, routeName, activeHold}) => ({
  boulderName,
  routeName,
  activeHold
})

const mapDispatchToProps = (dispatch) => ({
   selectHold(index) {
     dispatch(
       selectHold(index)
     )
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoulderRoute)
