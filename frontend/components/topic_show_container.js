import TopicShow from './topic_show';
import { connect } from 'react-redux';
import { fetchTopic } from '../actions/topic_actions';

const mapStateToProps = (state, ownProps) => {
  const topicId = ownProps.match.params.topicId;
  const topic = state.entities.topics;
  const users = Object.values(state.entities.users);
  const questions = Object.values(state.entities.questions);
  const answers = Object.values(state.entities.answers);
  const feedItems = questions.concat(answers);

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
    fetchTopic: (id) => dispatch(fetchTopic(id)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
