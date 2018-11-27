import React from 'react';
import CommentIndexItem from './comment_index_item';
// import CreateCommentFormContainer from './create_comment_form_container';

class CommentIndex extends React.Component {

  componentDidMount() {
    this.props.fetchComments(this.props.parentId)
  }

  getAuthorFromItem(item) {
    for (let i = 0; i < this.props.users.length; i++) {
      if (item.author_id === this.props.users[i].id) {
        return this.props.users[i]
      };
    };
  };

  render() {
    const ownComments = this.props.comments.filter((comment) => comment.parent_id === this.props.parentId)
    const coms = ownComments.map((comment) => {
      return (
        <CommentIndexItem
          comment={comment}
          author={this.getAuthorFromItem(comment)} />
      )
    })

    debugger
    return(
      <div className="comment-index">

        <ul className="comments-list">
          {coms}
        </ul>
      </div>
    )
  }
};

export default CommentIndex;
