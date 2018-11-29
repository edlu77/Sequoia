import { connect } from 'react-redux';
import { fetchAnswers } from '../actions/answer_actions';
import { fetchQuestion } from '../actions/question_actions';
import AnswerIndex from './answer_index';

const mapStateToProps = (state, ownProps) => {

  const answers = ownProps.answers || [];
  const questionId = ownProps.questionId;
  const users = ownProps.users;
  const question = ownProps.question;
  return ({
    answers: answers,
    question: question,
    users: users,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAnswers: (id) => dispatch(fetchAnswers(id)),
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    fetchComments: (id) => dispatch(fetchComments(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);
