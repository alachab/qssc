'use strict';

import React from 'react';
import moment from 'moment';

require('styles/components/ListAdhanTime.css');

var ListAdhanTimeComponent = React.createClass({

  render() {
    var qssc = this.props.qssc;
    if (!qssc.fajr) return <h1>Loading...</h1>;
      return (
          <ul className="item flex">
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item">fajr</li>
                  <li className="item">{qssc.fajr}</li>
                </ul>
            </li>
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item">dhuhr</li>
                  <li className="item">{qssc.dhuhr}</li>
                </ul>
            </li>
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item">asr</li>
                  <li className="item">{qssc.asr}</li>
                </ul>
            </li>
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item">maghrib</li>
                  <li className="item">{qssc.maghrib}</li>
                </ul>
            </li>
            <li className="item flex label">
                <ul className="inner-list flex flex-column">
                  <li className="item">isha</li>
                  <li className="item">{qssc.isha}</li>
                </ul>
            </li>
          </ul>
      );
  }

});

export default ListAdhanTimeComponent;
