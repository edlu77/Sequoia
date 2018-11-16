import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchQuestions } from './actions/question_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store } />, root);
});

window.fetchQuestions = fetchQuestions
