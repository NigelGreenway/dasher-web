// @flow
import React from 'react';

type Props = {
  content: string,
};

const Title = ({
  content,
}: Props) => (
  <div>
    <h1>{content}</h1>

    <style jsx> {`
        text-align: center;
        font-size: 2.0rem;
        color: #3d5a6a;
    `} </style>
  </div>
);


export default Title;
