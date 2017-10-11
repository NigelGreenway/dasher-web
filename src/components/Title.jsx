// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  content: string,
  className: ?string,
};

const Title = ({
  content,
  className,
} :Props) => <h1 className={className}>{content}</h1>;


export default styled(Title)`
  text-align: center;
  font-size: 2.0rem;
  color: #3d5a6a;
`;
