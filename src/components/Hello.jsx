// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  name: ?string,
  className: ?string,
};

const Hello = ({
  name,
  className,
} :Props) => <h1 className={className}>{!name ? 'Hello!' : `Hello, ${name}!`}</h1>;


const StyledHello = styled(Hello)`
  font-size: 4.4rem;
  color: #3d5a6a;
`;

export default StyledHello;
