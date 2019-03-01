import { RECEIVE_ALL_ANSWERS, RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';
import { RECEIVE_ALL_QUESTIONS } from '../actions/question_actions';
import { RECEIVE_TOPIC } from '../actions/topic_actions';
import { REMOVE_ANSWERS } from '../actions/answer_actions';
import merge from 'lodash/merge';

const answersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case REMOVE_ANSWERS:
      return {};
    case RECEIVE_TOPIC:
      return action.payload.answers || {}
    case RECEIVE_ALL_QUESTIONS:
    case RECEIVE_ALL_ANSWERS:
      return merge({}, oldState, action.payload.answers)
    case RECEIVE_ANSWER:
      let newwState = merge({}, oldState);
      newwState[action.answerId] = action.answer;
      return newwState;
    case REMOVE_ANSWER:
      let newState = merge({}, oldState);
      delete newState[action.answerId];
      return newState;
    default:
      return oldState;
  };
};

export default answersReducer;
