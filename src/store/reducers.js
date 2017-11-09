import C from '../constants'
import { combineReducers } from 'redux'

export const boulderName = (state, action) =>
  (action.type === C.SELECT_BOULDER) ?
    action.payload :
    state

export const routeName = (state, action) =>
  (action.type === C.SELECT_ROUTE) ?
  action.payload :
  state

export const activeHold = (state, action) => {
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

export const fetching = (state, action) => {
  return "finish this later"
}

export const routeData = (state, action) => {
  return "finish this later"
}

export default combineReducers({
  boulderName,
  routeName,
  activeHold,
  activeBeta,
  fetching,
  routeData
})
