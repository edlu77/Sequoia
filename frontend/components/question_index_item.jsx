import React from 'react';
import { Link } from 'react-router-dom';

const QuestionIndexItem = (props) => {
  return (
    <li key={props.question.id} className="question-index-item">
      <div className="question-topic-list">
        Question added
      </div>

      <Link className="question-index-title" to={`/questions/${props.question.id}`}>
        {props.question.title}
      </Link>

    </li>
  );
};

export default QuestionIndexItem;
