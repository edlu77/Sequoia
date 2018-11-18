import { RECEIVE_ALL_ANSWERS, RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';
import merge from 'lodash/merge';

const answersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_ANSWERS:
      return action.answers;
    case RECEIVE_ANSWER:
      return merge({}, oldState, {[action.answer.id]: action.answer})
    case REMOVE_ANSWER:
      let newState = merge({}, oldState);
      delete newState[action.answerId];
      return newState;
    default:
      return oldState;
  };
};

export default answersReducer;
