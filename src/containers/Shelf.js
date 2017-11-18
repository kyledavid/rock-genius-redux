import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router'
import HoldDetails from './HoldDetails'
import RouteSelection from '../components/RouteSelection'

const Shelf = ( { active } ) => {
  return (
    <div>
      <Switch>
        <Route path="/boulders/:boulder/:routeName" render={(props) => <HoldDetails
          active={active}
          match={props.match} />} />
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
