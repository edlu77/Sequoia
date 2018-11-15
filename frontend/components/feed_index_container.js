import { connect } from 'react-redux';
import React from 'react';
import FeedIndex from './feed_index';

const mapStateToProps = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  return
}

const mapDispatchToProps = (dispatch) => {
  return
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
