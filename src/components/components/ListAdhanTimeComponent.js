'use strict';

import React from 'react';
import moment from 'moment';

require('styles/components/ListAdhanTime.css');

var ListAdhanTimeComponent = React.createClass({

  render() {
    var prayers = this.props.prayers;
    var today = moment().format('YYYY-M-D');
    if (!prayers.items) return <h1>Loading...</h1>;
    var current =  prayers.items.filter( item => item.date_for === today )[0];
      return (
          <ul className="item flex">
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item">fajr</li>
                  <li className="item">{current.fajr}</li>
                  <li className="item">{current.fajr}</li>
                </ul>
            </li>
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item">dhuhr</li>
                  <li className="item">{current.dhuhr}</li>
                  <li className="item">{current.dhuhr}</li>
                </ul>
            </li>
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item">asr</li>
                  <li className="item">{current.asr}</li>
                  <li className="item">{current.asr}</li>
                </ul>
            </li>
            <li className="item flex label sep">
                <ul className="inner-list flex flex-column">
                  <li className="item">maghrib</li>
                  <li className="item">{current.maghrib}</li>
                  <li className="item">{current.maghrib}</li>
                </ul>
            </li>
            <li className="item flex label">
                <ul className="inner-list flex flex-column">
                  <li className="item">isha</li>
                  <li className="item">{current.isha}</li>
                  <li className="item">{current.isha}</li>
                </ul>
            </li>
          </ul>
      );
  }

});

export default ListAdhanTimeComponent;
