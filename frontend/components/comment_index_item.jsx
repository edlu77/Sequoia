import React from 'react';

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

const CommentIndexItem = (props) => {
  const date = new Date(props.comment.created_at)

  return (
    <li className="comment-index-item">
      <div className="comment-author">
        {props.author.username}
      </div>
      <div className="comment-created-time">
        {`${MONTHS[(date.getMonth()+1)] + " " + date.getDate() + ", " + date.getFullYear()}`}
      </div>

      <div className="comment-body">
        {props.comment.body}
      </div>
    </li>
  )
};

export default CommentIndexItem;
