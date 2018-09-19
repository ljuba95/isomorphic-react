import {createStore, combineReducers, applyMiddleware} from "redux"
import { identity } from 'lodash'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from "redux-logger";
import fetchQuestionsSaga from './sagas/fetch-questions.saga'
import reducer from './reducers/questions'

export default function(defaultState) {
  const saga = createSagaMiddleware()
  const middlewares = [saga]
  if(process.env.NODE_ENV === 'development') {
    const logger = createLogger()
    middlewares.push(logger)
  }
  const store = createStore(reducer, defaultState, applyMiddleware(...middlewares))
  saga.run(fetchQuestionsSaga)
  return store
}

