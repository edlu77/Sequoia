import { connect } from 'react-redux';
import React from 'react';
import TopicsList from './topics_list';
import { fetchTopics } from '../actions/topic_actions';


const mapStateToProps = (state, ownProps) => {
  const topics = ownProps.topics;
  const selected = topics[ownProps.selected] || {name: "none"};
  return ({
    selected: selected,
    topics: topics,
  });
};

export default connect(mapStateToProps)(TopicsList);
