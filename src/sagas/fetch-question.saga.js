import {takeEvery, put} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

export default function * () {
  yield takeEvery('REQUEST_FETCH_QUESTION', handleFetchQeustion)
}

function * handleFetchQeustion({question_id}) {
  const data = yield fetch(`/api/questions/${question_id}`)
  const question = yield data.json()
  yield put({type: 'QUESTION_FETCHED', question: question.items[0]})
}