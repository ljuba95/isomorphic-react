import unionWith from "lodash/unionWith";

export default function (state = [], {type, questions}) {

  const equal = (a = {}, b = {}) => a.question_id === b.question_id

  if (type === 'QUESTIONS_FETCHED') {
    state = unionWith(state, questions, equal)
  }

  return state
}