import React from 'react';
import Api   from '../../services/api';

import Salat from '../components/salatComponent';



require('styles/components/Admin.css');

var SuccessComponent = React.createClass({

  getInitialState() {
    return {qssc: ''};
  },

  componentWillMount(){
    Api.getItem().then( qssc => {
        this.setState({qssc:qssc});
    });
  },

  render() {
    return (
      <div className="flex">
          <div className="item">
            <Salat label="fajr" time={this.state.qssc.fajr} />
            <Salat label="dhuhr" time={this.state.qssc.dhuhr} />
          </div>
          <div className="item">
            <Salat label="asr" time={this.state.qssc.asr} />
            <Salat label="maghrib" time={this.state.qssc.maghrib} />
          </div>
          <div className="item">
            <Salat label="isha" time={this.state.qssc.isha} />
          </div>
      </div>
    );
  }

});

export default SuccessComponent;
