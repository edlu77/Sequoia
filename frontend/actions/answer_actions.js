import * as AnswerApiUtil from '../util/answers_api_util';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

const receiveAnswers = (payload) => {
  return ({
    type: RECEIVE_ALL_ANSWERS,
    payload: payload,
  })
};

const receiveAnswer = (answer) => {
  return ({
    type: RECEIVE_ANSWER,
    answer: answer,
  })
};

const removeAnswer = (answerId) => {
  return ({
    type: REMOVE_ANSWER,
    answerId: answerId,
  })
};

export const fetchAnswers = (questionId) => dispatch => {
  return AnswerApiUtil.fetchAnswers(questionId).then(
    (payload) => dispatch(receiveAnswers(payload))
  )
};

export const fetchAnswer = (id) => dispatch => {
  return AnswerApiUtil.fetchAnswer(id).then(
    (answer) => dispatch(receiveAnswer(answer))
  )
};

export const createAnswer = (answer) => dispatch => {

  return AnswerApiUtil.createAnswer(answer).then(
    (answer) => dispatch(receiveAnswer(answer))
  )
};

export const updateAnswer = (answer) => dispatch => {
  return AnswerApiUtil.updateAnswer(answer).then(
    (answer) => dispatch(receiveAnswer(answer))
  )
};

export const deleteAnswer = (answerId) => dispatch => {
  return AnswerApiUtil.deleteAnswer(answerId).then(
    () => dispatch(removeAnswer(answerId))
  )
};
