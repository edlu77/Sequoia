import { connect } from 'react-redux';
import React from 'react';
import TopicsList from './topics_list';
import { fetchTopics } from '../actions/topic_actions';


const mapStateToProps = (state, ownProps) => {
  const topics = state.entities.topics
  const selected = topics[ownProps.selected] || {name: "none"}
  return ({
    selected: selected,
    topics: topics,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics()),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList);
