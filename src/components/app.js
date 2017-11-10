import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './home';
import Page1 from './page1';
import Page2 from './page2';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Container>
            <Switch>
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}
