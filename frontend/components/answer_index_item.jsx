import React from 'react';
import { Link } from 'react-router-dom';

const AnswerIndexItem = (props) => {
  return (
    <li className="answer-index-item">
      <div>
        {props.author.username}
      </div>
      <br/>
      <div>
        {props.answer.body}
      </div>
    </li>
  )
}

export default AnswerIndexItem;
