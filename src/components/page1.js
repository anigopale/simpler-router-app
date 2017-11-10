import React, { Component } from 'react';
import Nav from './nav';

export default class Page1 extends Component {
  render() {
    console.log("inside page1");
    return (
      <div>
      <Nav currentpath={this.props.location.pathname} />
        this is page1
      </div>
    )
  }
}
