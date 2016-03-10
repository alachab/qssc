require('styles/components/Admin.css');

import React from 'react';
import 'whatwg-fetch';

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
          <form>
            <div className="flex-column fbox">
              <div className="item">User</div>
              <div className="item">
                  <input type="text" name="user" />
              </div>
            </div>
            <div className="flex-column fbox">
              <div className="item">Password</div>
              <div className="item">
                  <input type="password" name="user" />
              </div>
            </div>
            <div className="flex-column fbox">
              <div className="item">
                <button>go</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

});

export default AdminComponent;
