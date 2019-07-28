import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => (
  <header className="flex-container">    
    <img className="thumbnail thumbnail--small" src="http://localhost:3001/images/default.jpg" alt="Jenny" />
    <h1 className="flex-grow">Jenny</h1>    
    <NavLink className="button" to="/create" activeClassName="is-active"><i className="fas fa-comment"></i></NavLink>
  </header>
);

export default UserMenu;
