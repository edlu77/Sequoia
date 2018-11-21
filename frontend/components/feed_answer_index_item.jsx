import React from 'react';
import { Link } from 'react-router-dom';

const FeedAnswerIndexItem = (props) => {
  return (
    <li className="feed-answer-index-item">
      <div>
        <Link to={`/questions/${props.question.id}`}>
          {props.question.title}
        </Link>
         (asked by {props.author.username})
      </div>
      <br/>
      <div>
        {props.answer.body}
      </div>
    </li>
  )
}

export default FeedAnswerIndexItem;
