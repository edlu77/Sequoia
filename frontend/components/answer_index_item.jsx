import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from './comment_index_container';


const AnswerIndexItem = (props) => {

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
    <li className="answer-index-item">
      <div className="answer-author">
        {props.author.username}
      </div>
      <div className="answer-submit-time">
        <div className="feed-answer-created-time">
          {`Answered at ${date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}`}
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
        users={props.users} />
    </li>
  )
}

export default AnswerIndexItem;
