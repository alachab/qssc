'use strict';

import React from 'react';
import moment from 'moment';

import Ad from './AdComponent';
import Api from '../../services/api';

require('styles/components/Date.css');

var DateComponent = React.createClass({
  render() {
    return (
      <div className="item flex flex-column date">
        <div className="item label">{moment().format('MMMM Do YYYY')}</div>
        <Ad />
      </div>
    );
  }
});

export default DateComponent;
