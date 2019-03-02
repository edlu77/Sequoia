import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from './comment_index_container';
import UpdateAnswerFormContainer from './update_answer_form_container'

const MONTHS = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
}

const AnswerIndexItem = (props) => {


  const date = new Date(props.answer.created_at)
  return (
    <li className="answer-index-item">
      <div className="answer-author">
        {props.author.username}
      </div>
      <div className="answer-submit-time">
        <div className="feed-answer-created-time">
          {`Answered ${MONTHS[(date.getMonth()+1)] + " " + date.getDate() + ", " + date.getFullYear()}`}
        </div>
      </div>

      <div className='answer-edit'>
        <UpdateAnswerFormContainer
          answer = {props.answer}
          questionId = {props.question.id} />
      </div>

      <CommentIndexContainer
        answer={props.answer}
        users={props.users} />
    </li>
  )
}

export default AnswerIndexItem;
