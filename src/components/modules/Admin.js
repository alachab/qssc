require('styles/components/Admin.css');

import React from 'react';
import Form from '../components/FormComponent';

var AdminComponent = React.createClass({
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
