'use strict';

import React from 'react';
import { browserHistory } from 'react-router';
import admin from '../../models/admin';

require('styles/components/Form.css');

var FormComponent = React.createClass({

  getInitialState: function() {
    return {user : '', pass : ''};
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var user = this.state.user.trim();
    var pass = this.state.pass.trim();

    if (!pass || !user) {
      return;
    }

    if( pass !== admin.pass && user !== admin.user ){
      this.setState({user: '',pass: ''});
      return;
    }

    //TODO : store login session
    browserHistory.push('/admin/success');

  },

  handlePassword : function(evt){
    console.log('handlePassword called ', evt.target.value);
    this.setState({pass : evt.target.value});
  },

  handleUser : function(evt){
    console.log('handleUser called ', evt.target.value);
    this.setState({user : evt.target.value});
  },

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="flex-column fbox">
            <div className="item">User</div>
            <div className="item">
                <input type="text"
                       name="user"
                       placeholder="hey man"
                       onChange={this.handleUser}
                       value={this.state.user} />
            </div>
          </div>
          <div className="flex-column fbox">
            <div className="item">Password</div>
            <div className="item">
                <input type="password"
                       name="pass"
                       placeholder="password"
                       onChange={this.handlePassword}
                       value={this.state.pass} />
            </div>
          </div>
          <div className="flex-column fbox">
            <div className="item">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
    );
  }
});

export default FormComponent;
