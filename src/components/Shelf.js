import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router'
import HoldDetails from '../containers/HoldDetails'
import RouteSelection from './RouteSelection'

const Shelf = ( { activeHold, fetching } ) => {
  console.log(`fetching ${fetching}`)
  return (
    <div>
      <Switch>
        <Route path="/boulders/:boulder/:routeName" render={props => !fetching ? <HoldDetails
          active={activeHold}
          match={props.match} /> : <div></div>} />
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
