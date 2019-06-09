import { connect } from 'react-redux';
import React from 'react';
import TopicsList from './topics_list';
import { fetchTopics } from '../actions/topic_actions';


const mapStateToProps = (state, ownProps) => {
  const followedTopics = ownProps.followedTopics;
  const topics = ownProps.topics;
  const selected = topics[ownProps.selected] || {name: "none"};
  return ({
    selected: selected,
    followedTopics: followedTopics,
  });
};

export default connect(mapStateToProps)(TopicsList);
