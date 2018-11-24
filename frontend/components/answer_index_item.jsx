import React from 'react';
import { Link } from 'react-router-dom';

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
    </li>
  )
}

export default AnswerIndexItem;
