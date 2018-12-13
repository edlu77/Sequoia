import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from './comment_index_container';

const AnswerIndexItem = (props) => {
  const date = new Date(props.answer.created_at)
  return (
    <li className="answer-index-item">
      <div className="answer-author">
        {props.author.username}
      </div>
      <div className="answer-submit-time">
        <div className="feed-answer-created-time">
          {`Answered at ${date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}`}
        </div>
      </div>

      <div className="answer-body"
        dangerouslySetInnerHTML={{__html: props.answer.body}}>
      </div>
      <CommentIndexContainer
        answer={props.answer}
        users={props.users} />
    </li>
  )
}

export default AnswerIndexItem;
