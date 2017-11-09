import reducer from './reducers'
import { applyMiddleware, createStore } from 'redux'

const fakeMiddleware = store => next => action => {
  let result
  console.log('sup bro')
  result = next(action)

  return result
}

export default (initialState={}) => {
  return applyMiddleware(fakeMiddleware)(createStore)(reducer, initialState)
}
