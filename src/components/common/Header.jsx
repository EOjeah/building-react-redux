import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#f15b2a' };
  return (
    <nav className="container">
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
      {' | '}
      <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
      {' | '}
      <NavLink to="/signup" activeStyle={activeStyle}>Sign Up</NavLink>
    </nav>
  );
};

export default Header;
