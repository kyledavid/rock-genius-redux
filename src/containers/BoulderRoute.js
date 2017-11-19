import React from 'react'
import { connect } from 'react-redux'
import BoulderRoute from '../components/BoulderRoute'
import { deselectHold, selectHold } from '../actions'

const mapStateToProps = ({ activeBeta, activeHold, boulderName, routeName, routeData }) => ({
  activeBeta,
  activeHold,
  boulderName,
  routeData,
  routeName,
})

const mapDispatchToProps = (dispatch) => ({
  deselectHold() {
    dispatch(
      deselectHold()
    )
  },
   selectHold(index) {
     dispatch(
       selectHold(index)
     )
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoulderRoute)
