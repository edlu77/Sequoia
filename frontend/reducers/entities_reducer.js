import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import answersReducer from './answers_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  answers: answersReducer,
  comments: commentsReducer,
});

export default entitiesReducer;
