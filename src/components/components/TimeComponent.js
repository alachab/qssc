'use strict';

import React from 'react';
import moment from 'moment';

require('styles/components/Time.css');

var TimeComponent = React.createClass({

  getInitialState: function() {
    return {hours: 0, minutes: 0, seconds: 0};
  },

  tick: function() {

    var now = moment(),
        second = now.seconds() * 6,
        minute = now.minutes() * 6 + second / 60,
        hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

    this.setState({hours: hour, minutes: minute, seconds: second});
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {

    var hoursStyle   = {transform : 'rotate('+ this.state.hours   +'deg)'};
    var minutesStyle = {transform : 'rotate('+ this.state.minutes +'deg)'};
    var secondsStyle = {transform : 'rotate('+ this.state.seconds +'deg)'};

    return (
      <div className="item time">
        <div className="hero-circle">
    			<div className="hero-face">
    				<div style={hoursStyle}   className="hero-hour"></div>
    				<div style={minutesStyle} className="hero-minute"></div>
    				<div style={secondsStyle} className="hero-second"></div>
    			</div>
    		</div>
      </div>
    );
  }
});

export default TimeComponent;
