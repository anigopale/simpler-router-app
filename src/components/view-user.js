import React, { Component } from 'react';
import Nav from './nav';
import { showUser } from '../actions';
import { Link } from 'react-router-dom';
import { Button, Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Viewuser extends Component {

  constructor(props) {
    super(props);

    this.state={ fetched: false }
  }
  componentDidMount() {
    this.props.showUser(this.props.match.params.uid);
    if(this.props.match.params.uid == this.props.user.id)
      this.setState({ fetched: true })
  }
  componentDidUpdate() {
    if(this.props.match.params.uid == this.props.user.id)
      this.setState({ fetched: true })
  }


  renderUserDetails() {
    if(!this.state.fetched){
      return <h1>Loading...</h1>
    }

    return (
      <Container text>
        <Segment>
          <h2>{this.props.user.name}</h2>
          <div>email: {this.props.user.email}</div>
          <div>website: {this.props.user.website}</div>
          <div>
            phone: {this.props.user.phone}
          </div>
        </Segment>
      </Container>
    )
  }

  render() {
    console.log(this.props.match.params.uid);
    console.log(this.props.user);


    return(
      <div>
        <Nav />
        <Link to="/users">
          <Button>Back</Button>
        </Link>
        {this.renderUserDetails()}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user};
}

export default connect(mapStateToProps, { showUser })(Viewuser);
