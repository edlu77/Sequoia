import React from 'react';
import { Link } from 'react-router-dom';

const QuestionIndexItem = (props) => {
  return (
    <li key={props.question.id} className="question-index-item">
      {props.question.topic}
      <br/>
      <Link to={`/questions/${props.question.id}`}>
        {props.question.title}
      </Link>
      <button onClick={() => props.deleteQuestion(props.question.id)}>Delete</button>
    </li>
  );
};

export default QuestionIndexItem;
