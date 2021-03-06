import * as QuestionApiUtil from '../util/question_api_util';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const REMOVE_QUESTIONS = 'REMOVE_QUESTIONS';

const receiveQuestions = (payload) => {
  return ({
    type: RECEIVE_ALL_QUESTIONS,
    payload: payload,
  })
};

const receiveQuestion = (question) => {
  return ({
    type: RECEIVE_QUESTION,
    question: question,
  })
};

const removeQuestion = (questionId) => {
  return ({
    type: REMOVE_QUESTION,
    questionId: questionId,
  })
};

const removeQuestions = () => {
  return ({
    type: REMOVE_QUESTIONS,
  })
}

export const fetchQuestions = () => dispatch => {
  return QuestionApiUtil.fetchQuestions().then(
    (payload) => dispatch(receiveQuestions(payload))
  )
};

export const fetchQuestion = (id) => dispatch => {
  return QuestionApiUtil.fetchQuestion(id).then(
    (question) => dispatch(receiveQuestion(question))
  )
};

export const createQuestion = (question) => dispatch => {
  return QuestionApiUtil.createQuestion(question).then(
    (question) => dispatch(receiveQuestion(question))
  )
};

export const updateQuestion = (question) => dispatch => {
  return QuestionApiUtil.updateQuestion(question).then(
    (question) => dispatch(receiveQuestion(question))
  )
};

export const deleteQuestion = (questionId) => dispatch => {
  return QuestionApiUtil.deleteQuestion(questionId).then(
    () => dispatch(removeQuestion(questionId))
  )
};
