import React from 'react';
import { NavLink } from 'react-router-dom';

const PageHeader = (props) => (
  <header className="flex-container">      
    <NavLink className="button" to="/" activeClassName="is-active">
        <i className="fas fa-arrow-left"></i>
    </NavLink>
    <h1 className="flex-grow">{props.title}</h1>  
  </header>
);

export default PageHeader;
