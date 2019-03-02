import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from './comment_index_container';
import UpdateAnswerFormContainer from './update_answer_form_container';

const FeedAnswerIndexItem = (props) => {

  return (
    <li className="feed-answer-index-item">
      <div className="answer-topic-list">Answer</div>
      <div className="answer-question-title">
        <Link className="feed-answer-title" to={`/questions/${props.answer.question_id}`}>
          {props.question.title}
        </Link>
      </div>
      <div className='answer-edit'>
        <UpdateAnswerFormContainer
          answer = {props.answer}
          questionId = {props.question.id}
          author = {props.author} />
      </div>
      <CommentIndexContainer
        answer={props.answer}
        users={props.users}/>
    </li>
  )
}

export default FeedAnswerIndexItem;
