import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
// App imports
import WelcomePage from './Welcome/WelcomePage';
import ChangelogPage from './Changelog/ChangelogPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/changelog" component={ChangelogPage} />
    </Switch>
  </main>
);

export default () => (
  <div>
    <Main />
  </div>
);
