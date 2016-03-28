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
                  <li className="item flex flex-column"><h4 className="item">fajr</h4></li>
                  <li className="item flex flex-column"><h4 className="item">{qssc.fajr}</h4></li>
                </ul>
            </li>
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item flex flex-column"><h4 className="item">dhuhr</h4></li>
                  <li className="item flex flex-column"><h4 className="item">{qssc.dhuhr}</h4></li>
                </ul>
            </li>
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item flex flex-column"><h4 className="item">asr</h4></li>
                  <li className="item flex flex-column"><h4 className="item">{qssc.asr}</h4></li>
                </ul>
            </li>
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item flex flex-column"><h4 className="item">maghrib</h4></li>
                  <li className="item flex flex-column"><h4 className="item">{qssc.maghrib}</h4></li>
                </ul>
            </li>
            <li className="item flex label">
                <ul className="inner-list flex flex-column">
                  <li className="item flex flex-column"><h4 className="item">isha</h4></li>
                  <li className="item flex flex-column"><h4 className="item">{qssc.isha}</h4></li>
                </ul>
            </li>
          </ul>
      );
  }

});

export default ListAdhanTimeComponent;
