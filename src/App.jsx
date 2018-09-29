import React from 'react'
import {connect} from "react-redux";
import QuestionList from './components/QuestionList'
import QuestionDetail from "./components/QuestionDetail";
import {Route} from "react-router-dom";
import NotificationsViewer from './components/NotificationsViewer'

const App = () => (
  <div>
    <div className="jumbotron"><h1>StackOverflow Questions</h1></div>
    <div>
      <NotificationsViewer/>
      <Route exact path="/" render={() => <QuestionList/> } />
      <Route exact path="/questions/:id"
             render={({match}) => <QuestionDetail question_id={match.params.id}/> }
      />
    </div>
  </div>
)

const mapStateToProps = (state,ownProps) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App)