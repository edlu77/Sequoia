import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { fetchQuestions, deleteQuestion } from '../actions/question_actions';

var sortByTime = function(a, b) {
  if (a.created_at < b.created_at) {
    return 1;
  } else if (a.created_at > b.created_at) {
    return -1;
  } else {
    return 0
  }
};

const mapStateToProps = (state) => {
  // this is for later when we want to filter out questions based on currentUser's subscribed topics
  // const currentUserId = state.session.id;
  // const currentUser = state.entities.users[currentUserId];
  const questions = Object.values(state.entities.questions).sort(sortByTime)
  const answers = Object.values(state.entities.answers).sort(sortByTime)
  const users = Object.values(state.entities.users)
  return ({
    questions: questions,
    answers: answers,
    users: users,
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
