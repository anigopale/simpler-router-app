import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './home';
import Users from './users';
import Page2 from './page2';
import Viewuser from './view-user';
import Posts from './posts';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Container>
            <Switch>
              <Route path="/users/:uid/posts/:pid" component={Posts} />
              <Route path="/users/:uid/posts" component={Posts} />
              <Route path="/users/:uid" component={Viewuser} />
              <Route path="/users" component={Users} />
              <Route path="/page2" component={Page2} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}
