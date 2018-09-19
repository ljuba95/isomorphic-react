import React from 'react'
import {connect} from "react-redux";


const App = ({questions}) => questions.map(q => <p key={q.question_id}>{q.title}</p>)

const mapStateToProps = (state) => {
  return {
    questions: state
  }
}

export default connect(mapStateToProps)(App)