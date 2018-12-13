import React from 'react';

const CommentIndexItem = (props) => {
  const date = new Date(props.comment.created_at)

  return (
    <li className="comment-index-item">
      <div className="comment-author">
        {props.author.username}
      </div>
      <div className="comment-created-time">
        {date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}
      </div>

      <div className="comment-body">
        {props.comment.body}
      </div>
    </li>
  )
};

export default CommentIndexItem;
