import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container'

const Navbar = ( {currentUser, logout} ) => {

  const loggedInNav = () => {
    return (
      <nav className="nav-main">
        <ul className="header-list-left group">
          <li><h1 className="header-logo">seQuoia</h1></li>
          <li><Link className="home-button" to="/">Home</Link></li>
        </ul>

        <ul className="header-list-right group">
          <li><SearchContainer /></li>
          <li><Link className="ask-question-button" to="/questions">Add Question</Link></li>
          <li><button className="logout-button" onClick={logout}>Log Out</button></li>
        </ul>
      </nav>
    )
  }
  return currentUser ? loggedInNav() : "";
};

export default Navbar;
