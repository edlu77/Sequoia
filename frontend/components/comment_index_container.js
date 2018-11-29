import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const users = ownProps.users;
  const parentId = ownProps.answer.id;
  const comments = Object.values(state.entities.comments)

  return ({
    comments: comments,
    users: users,
    parentId: parentId,
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchComments: (id) => dispatch(fetchComments(id)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
