import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css'
import App from './components/App'
import './style.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import initialState from '../data-model.json'
import storeFactory from './store'


const store = storeFactory(initialState)

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))
