import { connect } from 'react-redux';
import React from 'react';
import QuestionShow from './question_show';
import { fetchQuestion } from '../actions/question_actions';
import { fetchAnswers } from '../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {

  const questionId = ownProps.match.params.questionId;
  const question = state.entities.questions[questionId];
  const answers = state.entities.answers[questionId];

  return ({
    questionId: questionId,
    question: question,
    answers: answers,
  })
};

const mapDispatchToProps = (dispath) => {
  return ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    fetchAnswers: (id) => dispatch(fetchAnswers(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
