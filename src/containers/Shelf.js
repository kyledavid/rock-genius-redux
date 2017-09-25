import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router'
import HoldDetail from '../components/HoldDetail'
import RouteSelection from './RouteSelection'

const Shelf = ( props ) => {
  let setRouteName = props.setRouteName
  let active = props.active
  let pathTo = props.pathTo
  let boulderData = props.boulderData
  return (
    <div>
      
      <Switch>
        <Route path="/boulders/:boulder/:route" render={(props) => <HoldDetail active={active} boulderData={boulderData} match={props.match} setRouteName={setRouteName} pathTo={pathTo}/>} />
        <Route path="/boulders/:boulder" component={RouteSelection} />
      </Switch>
    </div>
  )
}

Shelf.propTypes = {
  active: PropTypes.number,
}

Shelf.defaultProps = {
  active: null,
}

export default Shelf
