import C from './constants'
import boulderData from './utils/boulders.json'

export const clearBeta = () => {
  return {
    type: C.CLEAR_BETA
  }
}

export const clearRoute = () => {
  return {
    type: C.CLEAR_ROUTE
  }
}

export const clearRouteData = () => {
  return {
    type: C.CLEAR_ROUTE_DATA
  }
}

export const deselectHold = () => {
  return {
    type: C.DESELECT_HOLD
  }
}

export const setFetching = () => {
  return {
    type: C.FETCHING_TRUE
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

export const selectBeta = (betaIndex) => {
  return {
    type: C.SELECT_BETA,
    payload: betaIndex
  }
}

export const sendRouteData = (routeData) => {
  return {
    type: C.CHANGE_ROUTE_DATA,
    payload: routeData
  }
}

export const fetchRouteData = (routeName) => {
  let routeData = boulderData['the pearl']['routes'][routeName]

  return {
    type: C.CHANGE_ROUTE_DATA,
    payload: routeData
  }
}
