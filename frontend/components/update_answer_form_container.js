import { connect } from 'react-redux';
import UpdateAnswerForm from './update_answer_form';
import { updateAnswer} from '../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.questionId;
  const answers = ownProps.answers;
  const answer = {body: ownProps.answer};

  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];

  return ({
    answer: answer,
    answers: answers,
    questionId: questionId,
    currentUser: currentUser,
  })
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAnswerForm);
