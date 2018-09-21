import unionWith from "lodash/unionWith";

export default function (state = [], {type, questions, question}) {

  const equal = (a = {}, b = {}) => a.question_id === b.question_id

  if(type === 'QUESTION_FETCHED'){
    state = unionWith([question], state, equal)
  }

  if (type === 'QUESTIONS_FETCHED') {
    state = unionWith(state, questions, equal)
  }

  return state
}