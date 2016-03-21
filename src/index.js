import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';

import App      from './components/Main';
import Admin    from './components/modules/Admin';
import Success  from './components/modules/Success';

import qsscApp from './reducers';

let store = createStore(qsscApp);



render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="admin" component={Admin}></Route>
    <Route path="/admin/success" component={Success}></Route>
  </Router>
), document.getElementById('app'));
