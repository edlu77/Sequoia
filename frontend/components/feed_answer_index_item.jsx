import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from './comment_index_container';

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
  const upvote = (e) => {
    if (props.answer.voters.includes(props.currentUserId.toString())) {
      props.answer.voters.splice(props.answer.voters.indexOf(props.currentUserId.toString()), 1)
      props.answer.upvotes--
    } else {
      if (props.answer.downvoters.includes(props.currentUserId.toString())) {
        props.answer.downvoters.splice(props.answer.downvoters.indexOf(props.currentUserId.toString()), 1)
        props.answer.upvotes++
      }
      props.answer.upvotes++
      props.answer.voters.push(props.currentUserId)
    }
    props.updateAnswer(props.answer)
  }

  const downvote = (e) => {
    if (props.answer.downvoters.includes(props.currentUserId.toString())) {
      props.answer.downvoters.splice(props.answer.downvoters.indexOf(props.currentUserId.toString()), 1)
      props.answer.upvotes++
    } else {
      if (props.answer.voters.includes(props.currentUserId.toString())) {
        props.answer.voters.splice(props.answer.voters.indexOf(props.currentUserId.toString()), 1)
        props.answer.upvotes--
      }
      props.answer.upvotes--
      props.answer.downvoters.push(props.currentUserId)
    }
    props.updateAnswer(props.answer)
  }

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

      <div className="answer-body"
        dangerouslySetInnerHTML={{__html: props.answer.body}}>
      </div>
      <div className="answer-options">
        <button className="answer-upvote-button" onClick={upvote}>
          Upvote · {props.answer.upvotes}
        </button>
        <button className="answer-downvote-button" onClick={downvote}>
          Downvote
        </button>
      </div>
      <CommentIndexContainer
        answer={props.answer}
        users={props.users}/>
    </li>
  )
}

export default FeedAnswerIndexItem;
