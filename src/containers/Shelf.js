import React from 'react'
import { connect } from 'react-redux'
import Shelf from '../components/Shelf'

const mapStateToProps = state => ({
  activeHold: state.activeHold
})

export default connect(mapStateToProps)(Shelf)
