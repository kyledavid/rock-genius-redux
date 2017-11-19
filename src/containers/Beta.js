import React from 'react'
import { connect } from 'react-redux'
import Beta from '../components/Beta'

const mapStateToProps = state => ({
  routeData: state.routeData,
  routeName: state.routeName
})

export default connect(mapStateToProps)(Beta)
