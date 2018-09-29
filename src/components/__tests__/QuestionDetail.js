import {mapStateToProps, QuestionDetail} from "../QuestionDetail"
import renderer from 'react-test-renderer'
import React from 'react'

describe(`Question Detail Component`, () => {

  describe('The Container Element', () => {

    describe('mapStateToProps', () => {

      it('should map the state to props correctly', () => {
        const sampleQuestion = {
          question_id: 42,
          body: "hello"
        }
        const state = {
          questions: [sampleQuestion]
        }
        const ownProps = {
          question_id: 42
        }
        const componentState = mapStateToProps(state,ownProps)
        expect(componentState).toEqual(sampleQuestion)
      })

    })

  })

  describe('The display element', () => {

    it('should not regress', () => {
      const tree = renderer.create(
        <QuestionDetail
          title="Hi"
          body="there"
          answer_count={23}
          tags={['hehe','hee']}
        />
      )

      expect(tree.toJSON()).toMatchSnapshot()
    })

  })


})