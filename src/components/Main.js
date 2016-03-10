require('normalize.css');
require('styles/App.css');

import React from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router';

import TimeComponent from './components/TimeComponent';
import DateComponent from './components/DateComponent';
import ListAdhanTimeComponent from './components/ListAdhanTimeComponent';
import NextComponent from './components/NextComponent';

var AppComponent = React.createClass({

  getInitialState: function() {
    return {data: {
      prayers : {},
      iqama : {}
    }};
  },

  componentDidMount(){
    fetch('../models/prayers.json')
        .then( response => {
          return response.json();
        }).then(prayers => {
          this.setState({data:{prayers:prayers}});
        }).catch((err) => {
          console.log('err ', err);
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
        <ListAdhanTimeComponent prayers={this.state.data.prayers} />
    </div>
    );
  }

});

export default AppComponent;
