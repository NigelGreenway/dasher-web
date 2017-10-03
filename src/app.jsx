/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import stylesheet from './sass/style.scss';

if (module.hot) {
  module.hot.accept();
}

render(
  <App />,
  document.getElementById('app'),
);
