import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import GreetingContainer from './greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import FeedIndexContainer from './feed_index_container';
import QuestionShowContainer from './question_show_container';
import CreateQuestionFormContainer from './create_question_form_container';

const App = () => {
  return (
    <div>
      <header className="header">
        <GreetingContainer />
      </header>
      <Switch>
        <ProtectedRoute exact path="/" component={FeedIndexContainer}/>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/questions/:questionId" component={QuestionShowContainer} />
        <ProtectedRoute path="/questions" component={CreateQuestionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
