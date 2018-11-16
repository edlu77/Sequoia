import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ( {currentUser, logout} ) => {

  const loggedInNav = () => {
    return (
      <nav className="nav-main">
        <div className="header-list-left group">
          <span className="header-logo">seQuoia</span>
          <Link to="/">Home</Link>
        </div>

        <div className="header-list-right group">
          <div className="ask-question-button">
            <Link to="/questions">Add Question</Link>
          </div>
          <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
      </nav>
    )
  }
  return currentUser ? loggedInNav() : "";
};

export default Navbar;
