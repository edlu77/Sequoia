import { connect } from 'react-redux';
import React from 'react';
import TopicsList from './topics_list';
import { fetchTopics } from '../actions/topic_actions';


const mapStateToProps = (state) => {
  return ({
    topics: state.entities.topics,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics()),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
