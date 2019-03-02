import { connect } from 'react-redux';
import { updateAnswer } from '../actions/answer_actions';
import AnswerIndex from './answer_index';

const mapStateToProps = (state, ownProps) => {

  const answers = ownProps.answers || [];
  const questionId = ownProps.questionId;
  const question = ownProps.question;
  const users = ownProps.users;
  return ({
    answers: answers,
    question: question,
    users: users,
  });
};


export default connect(mapStateToProps)(AnswerIndex);
