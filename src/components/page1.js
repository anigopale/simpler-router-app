import React, { Component } from 'react';
import { Segment, Container, Divider, Card } from 'semantic-ui-react';
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
        <Link to={link}>
          <Card
            header={user.name}
            description={user.website}
            meta={user.email}
          />
        </Link>
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
        <Container text>
          <Card.Group>
                {this.renderUsers()}
          </Card.Group>
        </Container>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUsers })(Page1);
