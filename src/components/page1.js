import React, { Component } from 'react';
import { Segment, Container, Divider, Card, Image } from 'semantic-ui-react';
import { fetchUsers } from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './nav';

class Page1 extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUsers();
  }
  componentDidUpdate() {
    console.log("component updated",this.props.posts);
  }

  renderUsers() {
    return this.props.users.map(user => {
      const link = `/users/${user.id}` ;
      return (

          <Card>
            <Card.Content>
              <Link to={link}>
                <h3>{user.name}</h3>
              </Link>
            </Card.Content>
          </Card>

      )
    })
  }
  handleMouseover(event) {
    console.log(event.target.className);
  if(event.target.className === 'ui segment')
    {event.target.className='ui segment inverted teal';}
  }
  handleMouseout(event) {
    if(event.target.className === 'ui segment inverted teal' || event.target.className === 'ui segment')
      {event.target.className='ui segment';}
  }

  render() {
    console.log("inside page1",this.props);
    return (
      <div>
      <Nav currentpath={this.props.location.pathname} />
        this is page1
        <Divider hidden />
          <Card.Group>
            {this.renderUsers()}
          </Card.Group>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUsers })(Page1);
