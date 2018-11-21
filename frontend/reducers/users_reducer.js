import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_QUESTIONS } from '../actions/question_actions';
import { RECEIVE_ALL_ANSWERS } from '../actions/answer_actions';
import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
    case RECEIVE_ALL_ANSWERS:
      return merge({}, oldState, action.payload.users)
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.currentUser.id]: action.currentUser})
    default:
      return oldState
  };
};

export default usersReducer;
