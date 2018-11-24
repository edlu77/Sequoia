import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer, fetchAnswers } from '../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.questionId;
  const answers = ownProps.answers;
  
  return ({
    answer: {body: ""},
    answers: answers,
    questionId: questionId,
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    fetchAnswers: (questionId) => dispatch(fetchAnswers(questionId)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
