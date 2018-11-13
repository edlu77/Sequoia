import * as SessionApiUtil from '../util/session_api_util';
export RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export LOGOUT_USER = 'LOGOUT_CURRENT_USER'
export RECEIVE_ERRORS = 'RECEIVE_ERRORS';


const receiveCurrentUser = (currentUser) => {
  return({
    type: "RECEIVE_CURRENT_USER",
    currentUser: currentUser,
  })
}

const logoutCurrentUser = () => {
  return({
    type: "LOGOUT_CURRENT_USER",
  })
}

const receiveErrors = (errors) => {
  return({
    type: "RECEIVE_ERRORS",
    errors: errors,
  })
}
