import { connect } from 'react-redux';
import React from 'react';
import QuestionShow from './question_show';
import { fetchQuestion } from '../actions/question_actions';
import { fetchAnswers } from '../actions/answer_actions';

var sortByTime = function(a, b) {
  if (a.created_at < b.created_at) {
    return 1;
  } else if (a.created_at > b.created_at) {
    return -1;
  } else {
    return 0
  }
};

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.match.params.questionId;
  const question = state.entities.questions[questionId];
  const answers = Object.values(state.entities.answers).filter(
    answer => answer.question_id == questionId).sort(sortByTime);
  const users = Object.values(state.entities.users);
  return ({
    questionId: questionId,
    question: question,
    answers: answers,
    users: users,
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    fetchAnswers: (id) => dispatch(fetchAnswers(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
