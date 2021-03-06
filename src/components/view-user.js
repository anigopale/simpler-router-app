import React, { Component } from 'react';
import Nav from './nav';
import { showUser } from '../actions';
import { Link } from 'react-router-dom';
import { Button, Container, Segment, Image, Divider, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Viewuser extends Component {

  constructor(props) {
    super(props);
    this.state={ fetched: false }
  }
  componentDidMount() {
    this.props.showUser(this.props.match.params.uid);
  }
  componentDidUpdate() {
    if(this.props.match.params.uid == this.props.user.id)
      this.setState({ fetched: true })
  }


  renderUserDetails() {
    if(!this.state.fetched){
      return <Loader active inline='centered'>fetching user data</Loader>
    }

    return (
      <Container text>
        <Segment>
          <Link to={"/users/"+this.props.match.params.uid+"/posts"}>
            <Button floated="right">Show User's Posts</Button>
          </Link>
          <Image src="http://www.cahcet.in/en/wp-content/uploads/2015/12/default-avatar.v9899025.gif" />
          <h2>{this.props.user.name}</h2>
          <div>Email: {this.props.user.email}</div>
          <div>Website: {this.props.user.website}</div>
          <div>
            Phone: {this.props.user.phone}
          </div>
          <div>
            Address:
            {this.props.user.address.street}, {this.props.user.address.suite}, {this.props.user.address.city}, {this.props.user.address.zipcode}
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
        <Divider />
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
