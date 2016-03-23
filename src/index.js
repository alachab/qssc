import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App      from './components/Main';
import Admin    from './components/modules/Admin';
import Success  from './components/modules/Success';

render((
  <Router history={browserHistory}>
    <Route name="qssc" path="/" component={App}></Route>
    <Route name="qssc-admin" path="/admin" component={Admin}></Route>
    <Route name="qssc-admin-success" path="/admin/success" component={Success}></Route>
  </Router>
), document.getElementById('app'));
