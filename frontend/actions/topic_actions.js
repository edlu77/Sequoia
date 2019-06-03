import * as TopicApiUtil from '../util/topics_api_util';
export const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

const receiveTopics = (topics) => {
  return ({
    type: RECEIVE_ALL_TOPICS,
    topics: topics,
  })
};

const receiveTopic = (payload) => {
  return ({
    type: RECEIVE_TOPIC,
    payload: payload,
  })
};

const followTopic = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser: user,
  })
}

export const fetchTopics = () => dispatch => {
  return TopicApiUtil.fetchTopics().then(
    (topics) => dispatch(receiveTopics(topics))
  )
};

export const fetchTopic = (id) => dispatch => {
  return TopicApiUtil.fetchTopic(id).then(
    (payload) => dispatch(receiveTopic(payload))
  )
};

export const followTopic = (user) => dispatch => {
  return TopicApiUtil.followTopic(user).then(
    (user) => dispatch(followTopic(user))
  )
};
