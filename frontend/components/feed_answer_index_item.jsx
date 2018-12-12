import React from 'react';
import { Link } from 'react-router-dom';

const FeedAnswerIndexItem = (props) => {

  return (
    <li className="feed-answer-index-item">
      <div className="answer-question-title">
        <Link to={`/questions/${props.question.id}`}>
          {props.question.title}
        </Link>
      </div>
      <br/>
      <div className="answer-body"
        dangerouslySetInnerHTML={{__html: props.answer.body}}>
      </div>
    </li>
  )
}

export default FeedAnswerIndexItem;
