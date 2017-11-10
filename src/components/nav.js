import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    console.log(this.props.currentpath);
    console.log(this.props.name);
    return (
      <div>
        <h1>Simple Routing App</h1>
        <Menu color="teal" inverted>

          <Link to="/">
            <Menu.Item
              active={ this.props.currentpath == "/" }
              name="Home"
              />
          </Link>

          <Link to="/users">
            <Menu.Item
              active={ this.props.currentpath == "/users" }
              name="Users"
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
