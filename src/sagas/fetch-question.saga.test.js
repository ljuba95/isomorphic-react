import {handleFetchQeustion} from "./fetch-question.saga";
import fetch from 'isomorphic-fetch'
//mocked fetch is imported from ./__mocks__/isomorphic-fetch, which is using spy fetch function

describe('Fetch questions saga', () => {

  beforeAll(() => {
    fetch.__setValue([{question_id:42}])
  })


  it('should fetch the questions', async () => {
    const gen = handleFetchQeustion({question_id: 42})
    const {value} = await gen.next()
    expect(value).toEqual([{question_id:42}])
    expect(fetch).toHaveBeenCalledWith(`/api/questions/42`)
  })
})