'use strict';

import React from 'react';

require('styles/components/Form.css');

var FormComponent = React.createClass({

  getInitialState: function() {
    return {
      login : {
        user : 'qssc',
        pass : 'qssc'
      },
      defaults : {
        user : 'hey',
        pass : 'hey',
      }
    };
  },

  onSubmit : function(){},

  handleChange : function(evt){
    evt.target.name === 'user' ? this.setState({defaults: {user : evt.target.value}}) : this.setState({defaults: {pass : evt.target.value}}) ;
  },

  render() {
    return (
        <form>
          <div className="flex-column fbox">
            <div className="item">User</div>
            <div className="item">
                <input type="text"
                       name="user"
                       onChange={this.handleChange}
                       value={this.state.defaults.user} />
            </div>
          </div>
          <div className="flex-column fbox">
            <div className="item">Password</div>
            <div className="item">
                <input type="password"
                       name="pass"
                       onChange={this.handleChange}
                       value={this.state.defaults.pass} />
            </div>
          </div>
          <div className="flex-column fbox">
            <div className="item">
              <button>go</button>
            </div>
          </div>
        </form>
    );
  }
});

export default FormComponent;
