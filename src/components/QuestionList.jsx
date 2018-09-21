import React from 'react'
import {connect} from 'react-redux'
import {QuestionListItem} from "./QuestionListItem";


const QuestionList = ({questions}) => (
  <div>
    {questions && questions.length ?
      <div>
        {questions.map(q => <QuestionListItem key={q.question_id} {...q} />)}
      </div> :
      <div>
        Loading...
      </div>
    }
  </div>
)

const mapStateToProps = ({questions}) => ({questions})

export default connect(mapStateToProps)(QuestionList)