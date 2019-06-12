import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container'

const Navbar = ( {currentUser, logout, openForm, openTopics} ) => {

  const loggedInNav = () => {
    return (
      <nav className="nav-main">

        <ul className="header-list-left group">
          <li className="header-left-logo">
            <Link className="header-logo" to="/">seQuoia</Link>
          </li>
          <li className="header-left-link">
            <Link className="header-link" to="/">Home</Link>
          </li>
          <li className="header-left-link">
            {openTopics}
          </li>
        </ul>

        <ul className="header-list-right group">
          <li className="search-container">
            <SearchContainer />
          </li>
          <li className="header-right-link">
            {openForm}
          </li>
          <li className="header-right-link">
            <button className="logout-button" onClick={logout}>Log Out</button>
          </li>
        </ul>

      </nav>
    )
  }
  return currentUser ? loggedInNav() : "";
};

export default Navbar;
