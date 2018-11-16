import { connect } from 'react-redux';
import React from 'react';
import QuestionShow from './question_show';
import { fetchQuestion } from '../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  
  const questionId = ownProps.match.params.questionId;
  const question = state.entities.questions[questionId];
  
  return ({
    question: question,
  })
};

const mapDispatchToProps = (dispath) => {
  return ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
