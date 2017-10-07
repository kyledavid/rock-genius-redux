import PropTypes from 'prop-types'
import React from 'react'
import { Route, Switch } from 'react-router'
import HoldDetail from '../components/HoldDetail'
import RouteSelection from './RouteSelection'

const Shelf = ( {setRouteName, active, pathTo, boulderData, boulderName, routeName} ) => {
  return (
    <div>
      <Switch>
        <Route path="/boulders/:boulder/:route" render={(props) => <HoldDetail active={active}
          boulderData={boulderData}
          boulderName={boulderName}
          routeName={routeName}
          match={props.match}
          pathTo={pathTo}/>} />
        <Route path="/boulders/:boulder" render={(props) => <RouteSelection
          setRouteName={setRouteName}
        />} />
      </Switch>
    </div>
  )
}

Shelf.propTypes = {
  active: PropTypes.number,
  boulderData: PropTypes.object.isRequired,
  setRouteName: PropTypes.func.isRequired,
}

Shelf.defaultProps = {
  active: null,
}

export default Shelf
