import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from './comment_index_container';

const FeedAnswerIndexItem = (props) => {
  const upvote = (e) => {
    props.answer.upvotes++
    props.updateAnswer(props.answer)
  }

  const date = new Date(props.answer.created_at)


  return (
    <li className="feed-answer-index-item">
      <div className="answer-topic-list">Answer</div>
      <div className="answer-question-title">
        <Link className="feed-answer-title" to={`/questions/${props.question.id}`}>
          {props.question.title}
        </Link>
      </div>
      <div className="feed-answer-author-name">
        {props.author.username}
        <div className="feed-answer-created-time">
          {`Answered at ${date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}`}
        </div>
      </div>

      <div className="answer-body"
        dangerouslySetInnerHTML={{__html: props.answer.body}}>
      </div>
      <button onClick={upvote}>
        Upvote {props.answer.upvotes}
      </button>
      <CommentIndexContainer
        answer={props.answer}
        users={props.users}/>
    </li>
  )
}

export default FeedAnswerIndexItem;
