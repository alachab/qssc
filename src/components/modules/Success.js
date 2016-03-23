import React      from 'react';
import ReactTabs  from 'react-tabs';
import Salat      from '../components/SalatComponent';
import AD         from '../components/AdComponent';
import store      from '../../stores';
import Api        from '../../services/api';

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;


require('styles/components/Success.css');

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
      var qssc = Object.assign({}, this.state.qssc, salat );
      Api.setItem(qssc).then(() => {
        this.setState({qssc});
      });
    });
  },

  componentWillMount(){
    Api.getItem().then( qssc => {
        this.setState({qssc:qssc});
    });
  },

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Iqama</Tab>
          <Tab>Ads</Tab>
        </TabList>
        <TabPanel>
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
                <Salat label="Jumuah" time={this.state.qssc.Jumuah} />
              </div>
          </div>
        </TabPanel>
        <TabPanel>
          <AD isEdit={true} />
        </TabPanel>

      </Tabs>
    );
  }

});

export default SuccessComponent;
