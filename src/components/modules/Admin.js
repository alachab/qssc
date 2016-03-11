require('styles/components/Admin.css');

import React from 'react';
import 'whatwg-fetch';
import Form from '../components/Form';

var AdminComponent = React.createClass({

  getInitialState: function() {
    return {data: {
      iqama : {}
    }};
  },

  componentDidMount(){
    fetch('../models/prayers.json')
        .then( response => {
          return response.json();
        }).then(prayers => {

        }).catch((err) => {
          console.log('err ', err);
        });
  },

  render() {
    return (
      <div className="flex flex-column wrapper">
        <div className="box">
          <h3>Qssc Admin</h3>
          <Form />
        </div>
      </div>
    );
  }

});

export default AdminComponent;
