import C from './constants'

export const selectBoulder = (boulderName='the girl') => {
  console.log('thangs happed')
  return {
    type: C.SELECT_BOULDER,
    payload: boulderName
  }
}

export const selectRoute = (routeName='the girl') => {
  console.log('thangs happed')
  return {
    type: C.SELECT_ROUTE,
    payload: routeName
  }
}
