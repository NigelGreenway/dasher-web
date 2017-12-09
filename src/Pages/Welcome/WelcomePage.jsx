// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import Title from './../../components/Title';

const WelcomePage = () => (
  <div>
    <Title content="Dasher: Get to them links in a dash..." />
    <Link to="/changelog">View Changelog</Link>


    <style jsx>{`
      width: 1200px;
      margin: 10px auto 0 auto; 
    `}</style>
  </div>
);

export default WelcomePage;
