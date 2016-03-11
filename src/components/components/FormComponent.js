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
        user : 'test',
        pass : 'test',
      }
    };
  },

  onSubmit : function(){},

  onChange : function(){},

  render() {
    return (
        <form>
          <div className="flex-column fbox">
            <div className="item">User</div>
            <div className="item">
                <input type="text" name="user" value={this.state.defaults.user} />
            </div>
          </div>
          <div className="flex-column fbox">
            <div className="item">Password</div>
            <div className="item">
                <input type="password" name="user" value={this.state.defaults.pass} />
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
