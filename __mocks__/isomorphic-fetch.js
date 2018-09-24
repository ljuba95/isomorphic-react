let value = 42
const isomorphicFetch = jest.fn(() => value)

isomorphicFetch.__setValue = v => value = v

export default isomorphicFetch