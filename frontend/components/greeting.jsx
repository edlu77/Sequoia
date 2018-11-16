import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <Link to='/questions'>Ask a Question!</Link>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
  return currentUser ? personalGreeting() : "";
};


export default Greeting;
