import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    body: "",
    parentId: ownProps.parentId,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createComment: (comment) => dispatch(createComment(comment)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
