require('styles/components/Admin.css');

import React from 'react';
import 'whatwg-fetch';

var SuccessComponent = React.createClass({

  getInitialState: function() {
    return {data: ''};
  },

  render() {
    return (
      <div className="flex flex-column wrapper">
        Success Page
      </div>
    );
  }

});

export default SuccessComponent;
