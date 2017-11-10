import React, { Component } from 'react';
import Nav from './nav';

export default class Home extends Component {
  render() {
    console.log("inside home");
    console.log(this.props.location.pathname);
    return (
      <div>
        <Nav currentpath={this.props.location.pathname} />
        this is home page
      </div>
    )
  }
}
