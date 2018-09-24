import {delay} from "redux-saga";

describe('hehehe', () => {

  beforeEach(() => {
    console.log('Before each')
  })

  beforeAll(() => {
    console.log('beforeAll')
  })

  afterEach(() => {
    console.log('afterEach')
  })

  afterAll(() => {
    console.log('afterAll')
  })

  //isolate
  // it.only('should display a list of items', () => {
  //   expect(2+2).toEqual(4)
  // })

  it('should display a list of items', () => {
    expect(2+2).toEqual(4)
  })

  //skip
  it.skip('should bal babsd', () => {
    expect(2+2).toEqual(4)
  })

  it('async test', done => {
    setTimeout(done,500)
  })

  it('async 2', () => {
    return new Promise( resolve => setTimeout(resolve,1000))
  })

  it('async 3', async () => await delay(100) )
})