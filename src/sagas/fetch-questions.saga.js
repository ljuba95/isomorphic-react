import {take, put} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

export default function* () {
  while (true) {
    yield take('FETCH_QUESTIONS_REQUEST')
    const data = yield fetch('/api/questions')
    const questions = yield data.json()
    yield put({type: 'QUESTIONS_FETCHED', questions: questions.items})
  }
}