'use strict';

import React from 'react';
import Timepicker from 'react-timepicker';

require('../../../node_modules/react-timepicker/timepicker.css');
require('styles/components/Salat.css');

import {updateIqama}  from '../../actions';
import store          from '../../stores';

var SalatComponent = React.createClass({

  getInitialState() {
    return {iqama: ''};
  },

  handleChange(hours, minutes){
      store.dispatch( updateIqama(this.props.label, this._getIqama(hours,minutes) ) );
  },

  _getIqama(h, m){
    let ampm = this.props.label === 'fajr' ? 'AM' : 'PM';
    h = this._zeroPad(h, 2);
    m = this._zeroPad(m, 2);
    return  `${h}:${m} ${ampm}`;
  },

  _zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  },

  _getTime(){
    if( !this.props.time ) return;
    var data = this.props.time.split(':');
    var h = parseInt(data[0], 10);
    var m = parseInt(data[1].split(' ')[0], 10);
    return{h, m};
  },

  render() {
    var militaryTime = false;
    var salat = this._getTime();
    if( !salat ) return <h1>Loading...</h1>;
    return (
      <div className="salat flex flex-column">
        <h2>{this.props.label}</h2>
        <div className="item">
          <Timepicker
            hours={salat.h}
            minutes={salat.m}
            militaryTime={militaryTime}
            onChange={this.handleChange} />
        </div>
      </div>
    );
  }
});

export default SalatComponent;
