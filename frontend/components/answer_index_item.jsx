import React from 'react';

const AnswerIndexItem = (props) => {
  return (
    <li className="answer-index-item">
      {props.answer.body}
    </li>
  )
}

export default AnswerIndexItem;
