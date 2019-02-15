import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer, fetchAnswers } from '../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.questionId;
  const answers = ownProps.answers;

  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];

  return ({
    answer: {body: "<p><br></p>"},
    answers: answers,
    questionId: questionId,
    currentUser: currentUser,
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    fetchAnswers: (questionId) => dispatch(fetchAnswers(questionId)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
