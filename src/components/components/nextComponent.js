'use strict';

import React from 'react';

require('styles/components/Next.css');

var NextComponent = React.createClass({
  render() {
    return (
      <ul className="item flex next">
        <li className="item flex label sep">
            <ul className="inner-list flex flex-column">
              <li className="item">Next</li>
              <li className="item">Fajr</li>
            </ul>
        </li>
        <li className="item flex label">
          <ul className="inner-list flex flex-column">
            <li className="item">Iqama</li>
            <li className="item">1 pm</li>
          </ul>
        </li>
      </ul>
    );
  }
});

export default NextComponent;
