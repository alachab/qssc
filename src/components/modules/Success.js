import React from 'react';
import Api   from '../../services/api';

import Salat from '../components/salatComponent';
import store    from '../../stores';


require('styles/components/Admin.css');

var SuccessComponent = React.createClass({

  getInitialState() {
    return {qssc: ''};
  },

  _getSalatTime(state){
    var output = {};
    output[state.iqama] = state.time;
    return output;
  },

  componentDidMount(){
    store.subscribe(() => {
      var state = store.getState().salat;
      var salat = this._getSalatTime(state);
      this.setState({qssc: Object.assign({}, this.state.qssc, salat ) });
    });
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
