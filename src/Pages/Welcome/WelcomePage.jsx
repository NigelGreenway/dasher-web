// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from './../../components/Title';

type WelcomePageType = {
  className: ?string,
};

const WelcomePage = ({
  className,
} :WelcomePageType) => (
  <div className={className}>
    <Title content="Dasher: Get to them links in a dash..." />
    <Link to="/changelog">View Changelog</Link>
  </div>
);

export default styled(WelcomePage)`
  width: 1200px;
  margin: 10px auto 0 auto; 
`;
