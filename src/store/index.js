import reducer from './reducers'
import { applyMiddleware, createStore } from 'redux'

const fakeMiddleware = store => next => action => {
  let result

  result = next(action)

  return result
}

export default (initialState={}) => {
  applyMiddleware(fakeMiddleware)(createStore)(reducer, initialState)
}
