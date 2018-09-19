import App from './App'
import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import getStore from "./getStore";


const store = getStore()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)


store.dispatch({type: 'FETCH_QUESTIONS_REQUEST'})