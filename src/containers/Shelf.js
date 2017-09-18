import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router'
import HoldDetail from '../components/HoldDetail'
import RouteSelection from './RouteSelection'

const Shelf = ( props ) => {
  let setRouteName = props.setRouteName
  let active = props.active
  return (
    <div>
      <Switch>
        <Route path="/boulders/:boulder/:route" render={(props) => <HoldDetail active={active} match={props.match} setRouteName={setRouteName} />} />
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
