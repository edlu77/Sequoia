import { connect } from 'react-redux';
import UpdateAnswerForm from './update_answer_form';
import { updateAnswer, deleteAnswer} from '../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.questionId;
  const answers = ownProps.answers;
  const answer = ownProps.answer;
  const body = {body: ownProps.answer};
  const answerId = ownProps.answerId;

  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  return ({
    answer: answer,
    id: answer.id,
    body: body,
    questionId: questionId,
    answerId: answerId,
    currentUser: currentUser,
    currentUserId: currentUserId,
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
