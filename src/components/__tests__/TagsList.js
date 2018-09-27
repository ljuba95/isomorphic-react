import React from 'react'
import TagsList from '../TagsList'
import renderer from 'react-test-renderer'

describe('Tags List component', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<TagsList tags={['js','haskell','go']}/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})