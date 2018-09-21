import React from 'react'
import TagsList from "./TagsList";
import {Link} from "react-router-dom";

export const QuestionListItem = ({title, tags, question_id}) => (
  <div className="mb-3">
    <h3>{title}</h3>
    <div className="mb-2">
      <TagsList tags={tags}/>
    </div>
    <div>
      <Link to={`/questions/${question_id}`}>
        <button className="btn btn-primary">More info</button>
      </Link>
    </div>
  </div>
)