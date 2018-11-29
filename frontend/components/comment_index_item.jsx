import React from 'react';

const CommentIndexItem = (props) => {

  return (
    <li className="comment-index-item">
      <div className="comment-author">
        {props.author.username}
      </div>
      <br/>
      <div className="comment-body">
        {props.comment.body}
      </div>
    </li>
  )
};

export default CommentIndexItem;
