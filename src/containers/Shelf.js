import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router'
import HoldDetail from '../components/HoldDetail'
import RouteSelection from './RouteSelection'

const Shelf = ( { active } ) => {
  return (
    <div>
      <Switch>
        <Route path="/boulders/:boulder/:routeName" render={(props) => <HoldDetail
          active={active}
          match={props.match} />} />
        <Route path="/boulders/:boulder" component={RouteSelection} />
      </Switch>
    </div>
  )
}

Shelf.propTypes = {
  active: PropTypes.number,
  boulderData: PropTypes.object.isRequired,
}

Shelf.defaultProps = {
  active: null,
}

export default Shelf
