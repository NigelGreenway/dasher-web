/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Pages/App';

import stylesheet from './sass/style.scss';

if (module.hot) {
  module.hot.accept();
}

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app'),
);
