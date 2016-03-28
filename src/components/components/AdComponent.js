'use strict';

import React from 'react';
import Api   from '../../services/api';

import {updateAd} from '../../actions';
import store      from '../../stores';

require('styles/components/Ad.css');


var AdComponent = React.createClass({

  getInitialState() {
    return {ad:{}};
  },

  componentDidMount(){
    Api.getItem( Api.getKey('qssc-ad') ).then((ad) => {
      this.setState({ad:ad});
    });
  },

  handleSubmit(evt){
    evt.preventDefault();
    var content = this.state.ad.content.trim();
    if( content ){
      store.dispatch( updateAd(content) );
    }
  },

  handleChange(evt){
    this.setState({ad: Object.assign({}, this.state.ad, { content : evt.target.value } )  });
  },

  render() {

    console.log('Ad state ', this.state);


    if( this.props.isEdit ){
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="flex-column fbox">
            <div className="item">Your Ad</div>
            <div className="item">
              <textarea type="text"
                     name="qsscAd"
                     placeholder="your Ad"
                     onChange={this.handleChange}
                     value={this.state.ad.content}>
              </textarea>
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
    return (
      <div className="item ad">
        {this.state.ad.content}
      </div>
    );
  }
});

export default AdComponent;
