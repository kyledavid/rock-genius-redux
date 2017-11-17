import C from './constants'

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

export const selectHold = (index, event) => {
  event.stopPropagation()
  return {
    type: C.SELECT_HOLD,
    payload: index
  }
}
