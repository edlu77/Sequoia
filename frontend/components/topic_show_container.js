import TopicShow from './topic_show';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/topic_actions';
import { fetchQuestions } from '../actions/question_actions';


const mapStateToProps = (state, ownProps) => {
  const topicId = ownProps.match.params.topicId;
  const topic = state.entities.topics[topicId];
  const users = Object.values(state.entities.users);
  const questions = Object.values(state.entities.questions).filter(
    (question) => question.topic_id == topicId
  );
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
    fetchTopics: () => dispatch(fetchTopics()),
    fetchQuestions: () => dispatch(fetchQuestions()),

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
