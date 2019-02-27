import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer} from '../actions/answer_actions';

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

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createAnswer: (answer) => dispatch(createAnswer(answer)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
