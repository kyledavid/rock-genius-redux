import React from 'react'
import { connect } from 'react-redux'
import BoulderImage from '../components/BoulderImage'

const mapStateToProps = ({ routeName }) => ({
  routeName,
})

const mapDispatchToProps = (dispatch) => {
  return null
}

export default connect(mapStateToProps)(BoulderImage)
