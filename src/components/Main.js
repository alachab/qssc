require('normalize.css');
require('styles/App.css');

import React from 'react';
import 'whatwg-fetch';

import TimeComponent from './components/TimeComponent';
import DateComponent from './components/DateComponent';
import ListAdhanTimeComponent from './components/ListAdhanTimeComponent';
import NextComponent from './components/NextComponent';

import store from '../stores';
import Api from '../services/api';

var AppComponent = React.createClass({

  getInitialState() {
    return { qssc: {} };
  },

  componentWillMount(){
    Api.store();
  },

  componentDidMount(){
    Api.getItem( Api.getKey() ).then((qssc) => {
      this.setState({qssc:qssc});
    });
  },

  render() {
    return (
      <div className="flex flex-column wrapper">
        <header className="item flex">
          <DateComponent />
          <TimeComponent />
        </header>
        <NextComponent />
        <ListAdhanTimeComponent qssc={this.state.qssc} />
    </div>
    );
  }

});

export default AppComponent;
