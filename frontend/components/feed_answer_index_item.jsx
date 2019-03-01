import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from './comment_index_container';
import UpdateAnswerFormContainer from './update_answer_form_container';

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

const FeedAnswerIndexItem = (props) => {

  const date = new Date(props.answer.created_at)
  return (
    <li className="feed-answer-index-item">
      <div className="answer-topic-list">Answer</div>
      <div className="answer-question-title">
        <Link className="feed-answer-title" to={`/questions/${props.answer.question_id}`}>
          {props.question.title}
        </Link>
      </div>
      <div className="feed-answer-author-name">
        {props.author.username}
        <div className="feed-answer-created-time">
          {`Answered ${MONTHS[(date.getMonth()+1)] + " " + date.getDate() + ", " + date.getFullYear()}`}
        </div>
      </div>

      <div className='answer-edit'>
        <UpdateAnswerFormContainer
          answer = {props.answer}
          answerId = {props.answer.id}
          questionId = {props.question.id}
          currentUser = {props.currentUser} />
      </div>

      <CommentIndexContainer
        answer={props.answer}
        users={props.users}/>
    </li>
  )
}

export default FeedAnswerIndexItem;
