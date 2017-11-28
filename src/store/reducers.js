import C from '../constants'
import { combineReducers } from 'redux'
import boulderData from '../utils/boulders.json'

export const boulderName = (state=null, action) =>
  (action.type === C.SELECT_BOULDER) ?
    action.payload :
    state

export const routeName = (state=null, action) => {
  switch(action.type) {
    case C.SELECT_ROUTE :
      return action.payload
    case C.CLEAR_ROUTE :
      return null
    default :
      return state
  }
}

export const activeHold = (state=null, action) => {
  switch(action.type) {
    case C.DESELECT_HOLD :
      return null
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
    case C.CLEAR_BETA :
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
  switch(action.type) {
    case C.FETCHING_TRUE :
      return true
    case C.CHANGE_ROUTE_DATA :
      return false
    default :
      return false
  }
}

export const routeData = (state={}, action) => {
  switch(action.type) {
    case C.CLEAR_ROUTE :
      return null
    case C.CLEAR_ROUTE_DATA :
      return null
    case C.CHANGE_ROUTE_DATA :
      return action.payload
    default :
      return state
  }
}

export default combineReducers({
  boulderName,
  routeName,
  activeHold,
  activeBeta,
  fetching,
  routeData
})
