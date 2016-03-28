'use strict';

import React from 'react';
import Api from '../../services/api';

require('styles/components/Next.css');



var NextComponent = React.createClass({

  getInitialState() {
    return { next: {}, jumuah : '' };
  },

  componentDidMount(){
    Api.getItem( Api.getKey() ).then((qssc) => {
      this.setState({jumuah:qssc.Jumuah});
    });
  },

  render() {
    return (
      <ul className="item flex next">
        <li className="item flex label sep">
            <ul className="inner-list flex flex-column">
              <li className="item flex flex-column">
                <h2 className="item">Next</h2>
              </li>
              <li className="item flex flex-column">
                <h2 className="item">Fajr</h2>
              </li>
            </ul>
        </li>
        <li className="item flex label">
          <ul className="inner-list flex flex-column">
            <li className="item flex flex-column">
              <h2 className="item">Jumuah</h2>
            </li>
            <li className="item flex flex-column">
              <h2 className="item">{this.state.jumuah}</h2>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
});

export default NextComponent;
