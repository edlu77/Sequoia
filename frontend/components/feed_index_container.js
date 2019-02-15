import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { fetchQuestions, deleteQuestion, clearQuestions } from '../actions/question_actions';
import { clearAnswers, updateAnswer } from '../actions/answer_actions';

import { fetchTopics } from '../actions/topic_actions';

var sortByVotes = function(a, b) {
  if (a.upvotes < b.upvotes) {
    return 1;
  } else if (a.upvotes > b.upvotes) {
    return -1;
  } else {
    return 0;
  }
};

var sortByTime = function(a, b) {
  if (a.created_at < b.created_at) {
    return 1;
  } else if (a.created_at > b.created_at) {
    return -1;
  } else {
    return 1;
  }
};


const mapStateToProps = (state) => {
  // this is for later when we want to filter out questions based on currentUser's subscribed topics
  // const currentUserId = state.session.id;
  // const currentUser = state.entities.users[currentUserId];
  const questions = Object.values(state.entities.questions).sort(sortByTime).slice(0, 10); //take 10 most recent questions
  const bestAnswers = Object.values(state.entities.answers).sort(sortByVotes).slice(0, 5); //take 5 most upvoted answers
  const recentAnswers = Object.values(state.entities.answers).sort(sortByTime).slice(0, 5); //take 5 more recent answers
  const answers = bestAnswers.concat(recentAnswers);
  const feedItems = questions.concat(answers).sort(sortByTime); //combine everything, sort all by time
  const users = Object.values(state.entities.users);
  const topics = state.entities.topics;
  const currentUserId = state.session.id;
  return ({
    questions: questions,
    answers: answers,
    feedItems: feedItems,
    topics: topics,
    users: users,
    currentUserId: currentUserId,
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    fetchTopics: () => dispatch(fetchTopics()),
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),

  })
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
