import React from 'react';
import { Link } from 'react-router-dom';

const AnswerIndexItem = (props) => {
  return (
    <li className="answer-index-item">
      <div className="answer-author">
        {props.author.username}
      </div>
      <br/>
      {props.answer.body}
    </li>
  )
}

export default AnswerIndexItem;
