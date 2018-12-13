import React from 'react';

const CommentIndexItem = (props) => {

  return (
    <li className="comment-index-item">
      <div className="comment-author">
        {props.author.username}
      </div>
      <div className="comment-created-time">
        {props.comment.created_at}
      </div>

      <div className="comment-body">
        {props.comment.body}
      </div>
    </li>
  )
};

export default CommentIndexItem;
