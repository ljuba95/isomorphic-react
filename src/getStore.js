import {createStore, combineReducers, applyMiddleware} from "redux"
import {identity} from 'lodash'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from "redux-logger";
import fetchQuestionsSaga from './sagas/fetch-questions.saga'
import fetchQuestionSaga from './sagas/fetch-question.saga'
import reducers from './reducers'
import {routerReducer as router, routerMiddleware} from 'react-router-redux'

export default function (history, defaultState) {

  const saga = createSagaMiddleware()
  const routerMiddle = routerMiddleware(history)

  const middlewares = [routerMiddle,saga]

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger()
    middlewares.push(logger)
  }

  const store = createStore(combineReducers({...reducers,router}), defaultState, applyMiddleware(...middlewares))
  saga.run(fetchQuestionsSaga)
  saga.run(fetchQuestionSaga)
  return store
}

