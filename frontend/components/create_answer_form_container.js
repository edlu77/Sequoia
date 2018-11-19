import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer } from '../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.questionId;
  return ({
    answer: {body: ""},
    formType: "create answer",
    questionId: questionId,
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createAnswer: (answer) => dispatch(createAnswer(answer))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
