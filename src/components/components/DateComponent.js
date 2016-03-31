'use strict';

import React from 'react';
import moment from 'moment';

import Ad from './AdComponent';
import Api from '../../services/api';

require('styles/components/Date.css');

var DateComponent = React.createClass({

  getInitialState() {
    return { ad : {}};
  },

  componentDidMount(){
    Api.getItem( Api.getKey('qssc-ad') ).then((ad) => {
      this.setState({ad});
    });
  },

  render() {
    if( !this.state.ad.content ) return <h1>Loading ...</h1>
    return (
      <div className="item flex flex-column date">
        <div className="item label">{moment().format('MMMM Do YYYY')}</div>
        <Ad content={this.state.ad.content} />
      </div>
    );
  }
});

export default DateComponent;
