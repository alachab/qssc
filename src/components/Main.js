require('normalize.css');
require('styles/App.css');

import React from 'react';
import 'whatwg-fetch';

import TimeComponent from './components/TimeComponent';
import DateComponent from './components/DateComponent';
import ListAdhanTimeComponent from './components/ListAdhanTimeComponent';


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
      <div className="flex flex-column">
        <header className="flex">
          <DateComponent />
          <TimeComponent />
        </header>
        <div className="main">
          <div className="item content">
            <ListAdhanTimeComponent prayers={this.state.data.prayers} />
          </div>
          <div className="item ad"></div>
        </div>
    </div>
    );
  }

});

export default AppComponent;
