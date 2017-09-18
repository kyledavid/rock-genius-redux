import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css'
import App from './containers/App'
import './style.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css'

ReactDOM.render(<App />, document.getElementById('app'))
