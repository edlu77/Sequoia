import * as QuestionApiUtil from '../util/question_api_util';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

const receiveQuestions = (questions) => {
  return ({
    type: RECEIVE_ALL_QUESTIONS,
    questions: questions,
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

export const fetchQuestions = () => dispatch => {
  return QuestionApiUtil.fetchQuestions().then(
    (questions) => dispatch(receiveQuestions(questions))
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
    (questionId) => dispatch(removeQuestion(questionId))
  )
};
