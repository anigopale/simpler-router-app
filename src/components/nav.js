import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    console.log(this.props.currentpath);
    return (
      <div>
        <h1>Simple Routing App</h1>
        <Menu>

          <Link to="/">
            <Menu.Item
              active={ this.props.currentpath == "/" }
              name="Home"
              />
          </Link>

          <Link to="/page1">
            <Menu.Item
              active={ this.props.currentpath == "/page1" }
              name="Show Posts"
              />
          </Link>

          <Link to="/page2">
            <Menu.Item
              active={ this.props.currentpath == "/page2" }
              name="Page2"
              />
          </Link>

        </Menu>
      </div>
    )
  }
}
