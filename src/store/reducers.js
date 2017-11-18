import C from '../constants'
import { combineReducers } from 'redux'
import boulderData from '../utils/boulders.json'

export const boulderName = (state=null, action) =>
  (action.type === C.SELECT_BOULDER) ?
    action.payload :
    state

export const routeName = (state=null, action) =>
  (action.type === C.SELECT_ROUTE) ?
  action.payload :
  state

export const activeHold = (state=null, action) => {
  switch(action.type) {
    case C.SELECT_ROUTE :
      return null
    case C.SELECT_BOULDER :
      return null
    case C.SELECT_HOLD :
      return action.payload
    default :
      return state
  }
}

export const activeBeta = (state=null, action) => {
  switch(action.type) {
    case C.SELECT_BETA :
      return action.payload
    case C.RESET_BETA :
      return null
    case C.SELECT_ROUTE :
      return null
    case C.SELECT_BOULDER :
      return null
    default :
      return state
  }
}

export const fetching = (state=false, action) => {
  return false
}

export const routeData = (state={}, action) => {
  switch(action.type) {
    case C.CHANGE_ROUTE_DATA :
      return action.payload
    default :
      return state
  }
  return routeData ? routeData : state
}

export default combineReducers({
  boulderName,
  routeName,
  activeHold,
  activeBeta,
  fetching,
  routeData
})
