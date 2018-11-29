import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../actions/session_actions';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign Up',
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
