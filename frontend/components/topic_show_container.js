import TopicShow from './topic_show';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/topic_actions';
import { fetchQuestions } from '../actions/question_actions';

var sortByTime = function(a, b) {
  if (a.created_at < b.created_at) {
    return 1;
  } else if (a.created_at > b.created_at) {
    return -1;
  } else {
    return 0
  }
};

const mapStateToProps = (state, ownProps) => {
  const topicId = ownProps.match.params.topicId;
  const topic = state.entities.topics[topicId];
  const users = Object.values(state.entities.users);
  const questions = Object.values(state.entities.questions).filter(
    (question) => question.topic_id == topicId
  );
  const answers = Object.values(state.entities.answers).filter(
    (answer) => answer.topic_id == topicId
  );
  const feedItems = questions.concat(answers).sort(sortByTime).slice(0, 10);;

  return ({
    questions: questions,
    answers: answers,
    feedItems: feedItems,
    topicId: topicId,
    topic: topic,
    users: users,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics()),
    fetchQuestions: () => dispatch(fetchQuestions()),

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
