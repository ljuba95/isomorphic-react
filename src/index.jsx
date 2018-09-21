import App from './App'
import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import getStore from "./getStore";
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const store = getStore(history)

function render(_App) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <_App/>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}

//render(App);

store.subscribe(() => {
  const state = store.getState()
  if (state.questions.length > 0) {
    console.info('Mounting app')
    render(App)
  } else {
    console.info('Not mounting')
  }
})

const fetchDataForLocation = location => {
  if(location.pathname === "/")
    store.dispatch({type: 'FETCH_QUESTIONS_REQUEST'})
  if(location.pathname.includes('questions'))
    store.dispatch({
      type: 'REQUEST_FETCH_QUESTION',
      question_id: location.pathname.split('/')[2]
    })
}

fetchDataForLocation(history.location)
history.listen(fetchDataForLocation)