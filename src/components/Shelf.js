import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router'
import HoldDetails from '../containers/HoldDetails'
import RouteSelection from './RouteSelection'

const Shelf = ( { activeHold, fetching, routeData } ) => {
  return (
    <div>
      <Switch>
        <Route path="/boulders/:boulder/:routeName" render={props => {
          return (<HoldDetails
            active={activeHold}
            match={props.match} />)
          }} />
        <Route path="/boulders/:boulder" component={RouteSelection} />
      </Switch>
    </div>
  )
}

Shelf.propTypes = {
  active: PropTypes.number,
  fetching: PropTypes.bool.isRequired
}

export default Shelf
