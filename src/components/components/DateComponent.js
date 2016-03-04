'use strict';

import React from 'react';
import moment from 'moment';

require('styles/components/Date.css');

var DateComponent = React.createClass({
  render() {
    return (
      <div className="item date">
        {moment().format('MMMM Do YYYY')}
      </div>
    );
  }
});

export default DateComponent;
