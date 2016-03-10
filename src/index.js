import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App   from './components/Main';
import Admin from './components/modules/Admin';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="admin" component={Admin}></Route>
  </Router>
), document.getElementById('app'));
