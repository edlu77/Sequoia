import TopicShow from './topic_show';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/topic_actions';
import { fetchQuestions } from '../actions/question_actions';
import { updateAnswer } from '../actions/answer_actions';

var sortByTime = function(a, b) {
  if (a.created_at < b.created_at) {
    return 1;
  } else if (a.created_at > b.created_at) {
    return -1;
  } else {
    return 0
  }
};

var sortByVotes = function(a, b) {
  if (a.constructor.name === "Question") {
    return 0
  }
  else if (a.upvotes < b.upvotes) {
    return 1;
  } else if (a.upvotes > b.upvotes) {
    return -1;
  } else {
    return 0
  }
};

const mapStateToProps = (state, ownProps) => {
  const topicId = ownProps.match.params.topicId;
  const topics = state.entities.topics;
  const topic = state.entities.topics[topicId];
  const users = Object.values(state.entities.users);
  const questions = Object.values(state.entities.questions).filter(
    (question) => question.topic_id == topicId).slice(0, 10);
  const answers = Object.values(state.entities.answers).filter(
    (answer) => answer.topic_id == topicId).sort(sortByVotes).slice(0, 10);
  const feedItems = questions.concat(answers).sort(sortByTime).sort(sortByVotes);
  const currentUserId = state.session.id;

  return ({
    questions: questions,
    answers: answers,
    feedItems: feedItems,
    topicId: topicId,
    topic: topic,
    topics: topics,
    users: users,
    currentUserId: currentUserId,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics()),
    fetchQuestions: () => dispatch(fetchQuestions()),
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
