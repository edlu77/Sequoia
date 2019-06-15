import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { fetchQuestions, deleteQuestion } from '../actions/question_actions';
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

var uniqueAnswers = function(answers) {
  let allAnswers = Object.values(answers)
  let questions = {};
  let result = [];
  for (var i=0; i<allAnswers.length; i++) {
    if(questions[allAnswers[i].question_id] === true) {
      questions[allAnswers[i].question_id] = true
    } else {
      questions[allAnswers[i].question_id] = true
      result.push(allAnswers[i])
    }
  }
  return result
};

const mapStateToProps = (state) => {
  const topics = state.entities.topics;

  const users = Object.values(state.entities.users);
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const followedTopics = currentUser.followed_topics;

  const allQuestions = Object.values(state.entities.questions)
  let questions = allQuestions;

  const allAnswers = Object.values(state.entities.answers)
  const bestAnswers = allAnswers.sort(sortByVotes);
  const recentAnswers = allAnswers.sort(sortByTime);
  let answers = uniqueAnswers(bestAnswers.concat(recentAnswers))

  if (followedTopics.length > 0) {
    questions = allQuestions.sort(sortByTime).filter(item =>
      followedTopics.includes(item.topic_id.toString()))
    answers = answers.filter(item =>
      followedTopics.includes(item.topic_id.toString()));
  }
  questions = questions.slice(0, 10);
  answers = answers.slice(0, 10);

  const feedItems = questions.concat(answers).sort(sortByTime) //combine everything, sort all by time

  return ({
    allQuestions: allQuestions,
    questions: questions,
    feedItems: feedItems,
    topics: topics,
    users: users,
    followedTopics: followedTopics,
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    fetchTopics: () => dispatch(fetchTopics()),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
