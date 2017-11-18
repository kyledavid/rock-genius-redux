import C from './constants'
import boulderData from './utils/boulders.json'

export const clearRoute = () => {
  return {
    type: C.CLEAR_ROUTE
  }
}

export const selectBoulder = (boulderName='the girl') => {
  return {
    type: C.SELECT_BOULDER,
    payload: boulderName
  }
}

export const selectRoute = (routeName) => {
  return {
    type: C.SELECT_ROUTE,
    payload: routeName
  }
}

export const selectHold = (index) => {
  return {
    type: C.SELECT_HOLD,
    payload: index
  }
}

export const fetchRouteData = (routeName) => {
  let routeData = boulderData['the pearl']['routes'][routeName]

  return {
    type: C.CHANGE_ROUTE_DATA,
    payload: routeData
  }
}
