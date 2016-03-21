'use strict';

import React from 'react';

require('styles/components/Ad.css');

var AdComponent = React.createClass({
  render() {
    return (
      <div className="item ad">
        Ad : {this.props.title}
        Ad : {this.props.content}
      </div>
    );
  }
});

export default AdComponent;
