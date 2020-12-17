import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Rouer for ultra-responsive web apps</p>
    <Link className="sample" to="about">Learn more</Link>
  </div>
);

export default HomePage;
