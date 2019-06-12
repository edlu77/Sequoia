import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modal_actions';
import { fetchTopics, followTopic } from '../actions/topic_actions';
import SelectTopicsForm from './select_topics_form';

const mapStateToProps = (state) => {
  const topics = Object.values(state.entities.topics);
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const followedTopics = currentUser.followed_topics;
  return ({
    topics: topics,
    followedTopics: followedTopics,
    currentUser: currentUser,
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    closeModal: () => dispatch(closeModal()),
    fetchTopics: () => dispatch(fetchTopics()),
    followTopic: (user) => dispatch(followTopic(user)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTopicsForm);
