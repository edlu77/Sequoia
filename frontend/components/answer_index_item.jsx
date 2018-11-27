import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from './comment_index_container';

const AnswerIndexItem = (props) => {

  return (
    <li className="answer-index-item">
      <div className="answer-author">
        {props.author.username}
      </div>
      <br/>
      <div className="answer-body">
        {props.answer.body}
      </div>
      <CommentIndexContainer
        answer={props.answer}
        users={props.users} />
    </li>
  )
}

export default AnswerIndexItem;
