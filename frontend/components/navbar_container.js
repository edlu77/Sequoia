import { connect } from 'react-redux';
import React from 'react';
import Navbar from './navbar';
import { logout } from '../actions/session_actions';
import {openModal} from '../actions/modal_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: (() => dispatch(logout())),
    openForm: (
      <button className="ask-question-button" onClick={() => dispatch(openModal('createQuestion'))}>
        Add Question
      </button>
    ),
    openTopics: (
      <button className="header-link" onClick={() => dispatch(openModal('selectTopics'))}>
        Feed Settings
      </button>
    )

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
