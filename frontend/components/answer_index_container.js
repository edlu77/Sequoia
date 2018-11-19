import { connect } from 'react-redux';
import { fetchAnswers } from '../actions/answer_actions';
import AnswerIndex from './answer_index';

const mapStateToProps = (state, ownProps) => {
  const answers = Object.values(state.entities.answers);
  const questionId = ownProps.questionId
  debugger
  return ({
    answers: answers,
    questionId: questionId,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAnswers: (id) => dispatch(fetchAnswers(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);
