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
        <div>
          <ul className="flex">
            <li className="item label">
              <div>
                <ul className="inner-list">
                  <li>fajr</li>
                  <li>{current.fajr}</li>
                </ul>
              </div>
            </li>
            <li className="item label">
              <div>
                <ul className="inner-list">
                  <li>dhuhr</li>
                  <li>{current.dhuhr}</li>
                </ul>
              </div>
            </li>
            <li className="item label">
              <div>
                <ul className="inner-list">
                  <li>asr</li>
                  <li>{current.asr}</li>
                </ul>
              </div>
            </li>
            <li className="item label">
              <div>
                <ul className="inner-list">
                  <li>maghrib</li>
                  <li>{current.maghrib}</li>
                </ul>
              </div>
            </li>
            <li className="item label">
              <div>
                <ul className="inner-list">
                  <li>isha</li>
                  <li>{current.isha}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      );
  }

});

export default ListAdhanTimeComponent;
