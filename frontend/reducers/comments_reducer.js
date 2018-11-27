import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ANSWER } from '../actions/answer_actions';
import merge from 'lodash/merge';

const commentsReducer = (oldState = {}, action) => {
  debugger
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, oldState, action.payload.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.comment.id]: action.comment});
    default:
      return oldState;
  };
};

export default commentsReducer;
