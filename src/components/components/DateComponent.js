'use strict';

import React from 'react';
import moment from 'moment';

import AdComponent from './AdComponent';
import Api from '../../services/api';

require('styles/components/Date.css');

var DateComponent = React.createClass({

  getInitialState() {
    return { ad : {} };
  },

  componentDidMount(){
    Api.getItem( Api.getKey('qssc-ad') ).then((ad) => {
      this.setState({ad:ad});
    });
  },

  render() {
    return (
      <div className="item flex flex-column date">
        <div className="item label">{moment().format('MMMM Do YYYY')}</div>
        <AdComponent title={this.state.ad.title} content={this.state.ad.content}></AdComponent>
      </div>
    );
  }
});

export default DateComponent;
