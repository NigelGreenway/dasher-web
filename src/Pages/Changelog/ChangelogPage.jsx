// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import Title from './../../components/Title';

const ChangelogPage = () => (
  <div>
    <Title content="Dasher change log:" />
    <Link to="/" >Home</Link>
    <p>So, this is where the <code>changelog</code> will live...</p>
  </div>
);

export default ChangelogPage;
