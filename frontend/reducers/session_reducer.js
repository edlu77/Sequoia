import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {id: action.currentUser.id})
    case LOGOUT_CURRENT_USER:
      return merge({}, oldState, {id: null})
    case default:
      return oldState
  };
};

export default sessionReducer;
