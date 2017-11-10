import React, { Component } from 'react';
import Nav from './nav';

export default class Page2 extends Component {
  render() {
    console.log("inside page2");
    return (
      <div>
      <Nav currentpath={this.props.location.pathname} />
        this is page2
      </div>
    )
  }
}
