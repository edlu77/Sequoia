import React from 'react';
import { Link } from 'react-router-dom';

const QuestionIndexItem = (props) => {
  return (
    <li key={props.question.id} className="question-index-item">
      <div>
        Question added - {props.question.topic}
      </div>
      <br/>
      <Link to={`/questions/${props.question.id}`}>
        {props.question.title}
      </Link>
      <br/>
    </li>
  );
};

export default QuestionIndexItem;
