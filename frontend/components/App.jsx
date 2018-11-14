import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const App = () => {
  return (
    <div>
      <h1>Sequoia (go to /login to login)</h1>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </div>
  )
};

export default App;
