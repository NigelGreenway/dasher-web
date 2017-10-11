// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from './../../components/Title';

type ChangelogPageType = {
  className: ?string,
};

const ChangelogPage = ({
  className,
} :ChangelogPageType) => (
  <div className={className}>
    <Title content="Dasher change log:" />
    <Link to="/" >Home</Link>
    <p>So, this is where the <code>changelog</code> will live...</p>
  </div>
);

export default styled(ChangelogPage)`
`;
