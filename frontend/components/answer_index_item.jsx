import React from 'react';

const AnswerIndexItem = (props) => {
  debugger
  return (
    <li key={props.key} className="answer-index-item">
      {props.answer.body}
    </li>
  )
}

export default AnswerIndexItem;
