import { connect } from 'react-redux';
import UpdateAnswerForm from './update_answer_form';
import { updateAnswer, deleteAnswer} from '../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  const answer = ownProps.answer;
  const questionId = ownProps.questionId;
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  return ({
    answer: answer,
    questionId: questionId,
    currentUser: currentUser,
    editOpen: 'closed',
  })
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAnswerForm);
