'use strict';

import React from 'react';
import moment from 'moment';

import AdComponent from './AdComponent';

require('styles/components/Date.css');

var DateComponent = React.createClass({
  render() {
    return (
      <div className="item flex flex-column date">
        <div className="item label">{moment().format('MMMM Do YYYY')}</div>
        <AdComponent />
      </div>
    );
  }
});

export default DateComponent;
