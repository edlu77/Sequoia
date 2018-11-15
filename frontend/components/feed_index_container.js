import { connect } from 'redux-react';
import import React from 'react';

const mapStateToProps = (state) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];

  return ({
    
  })
}
