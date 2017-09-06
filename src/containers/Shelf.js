import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router'
import HoldDetail from '../components/HoldDetail'
import RouteSelection from './RouteSelection'

const Shelf = ( {active} ) => {
  return (
    <div>
      <Switch>
        <Route path="/boulder/:bouldername/:routename" render={() => <HoldDetail active={active}/>} active={active} />
        <Route path="/boulder/:bouldername" component={RouteSelection} />
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
