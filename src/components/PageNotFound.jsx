import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => (
  <div className="container">
    <h1>Oops! Page not found.</h1>
    <NavLink to="/">Home</NavLink>
  </div>
);

export default PageNotFound;
