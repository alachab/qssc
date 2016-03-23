'use strict';

import React from 'react';

require('styles/components/Ad.css');

var AdComponent = React.createClass({
  render() {

    if( this.props.isEdit ){
      return (
        <h1>Edit Mode</h1>
      );
    }

    return (
      <div className="item ad">
        Ad : {this.props.title}
        Ad : {this.props.content}
      </div>
    );
  }
});

export default AdComponent;
