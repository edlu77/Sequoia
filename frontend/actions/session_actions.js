import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';


export const receiveCurrentUser = (currentUser) => {
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
  })
}

export const logoutCurrentUser = () => {
  return({
    type: LOGOUT_CURRENT_USER,
  })
}

export const receiveErrors = (errors) => {
  return({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors,
  })
}

export const removeErrors = () => {
  return({
    type: REMOVE_SESSION_ERRORS,
  })
}

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  )
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout().then(
    () => dispatch(logoutCurrentUser())
  )
};

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const clearErrors = () => (dispatch) => {
  return dispatch(removeErrors());
};
