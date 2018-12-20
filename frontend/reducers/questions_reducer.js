import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION, REMOVE_QUESTIONS } from '../actions/question_actions';
import { RECEIVE_TOPIC } from '../actions/topic_actions';
import merge from 'lodash/merge';

const questionsReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch (action.type) {
    case REMOVE_QUESTIONS:
      return {}
    case RECEIVE_TOPIC:
    case RECEIVE_ALL_QUESTIONS:
      return action.payload.questions;
    case RECEIVE_QUESTION:
      return merge({}, oldState, {[action.question.id]: action.question});
    case REMOVE_QUESTION:
      let newState = merge({}, oldState);
      delete newState[action.questionId];
      return newState;
    default:
      return oldState;
  };
};

export default questionsReducer;
