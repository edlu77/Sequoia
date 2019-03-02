import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from './comment_index_container';
import UpdateAnswerFormContainer from './update_answer_form_container'

const AnswerIndexItem = (props) => {

  return (
    <li className="answer-index-item">
      <div className='answer-edit'>
        <UpdateAnswerFormContainer
          answer = {props.answer}
          questionId = {props.question.id}
          author = {props.author} />
      </div>
      <CommentIndexContainer
        answer={props.answer}
        users={props.users} />
    </li>
  )
}

export default AnswerIndexItem;
