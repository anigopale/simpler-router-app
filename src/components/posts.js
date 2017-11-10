import React, { Component } from 'react';
import Nav from './nav';
import { Link, Route } from 'react-router-dom';
import { fetchPosts, showUser } from '../actions';
import { connect } from 'react-redux';
import { Grid, Segment, Container, Divider, Button } from 'semantic-ui-react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { fetched: false };
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.uid);
    this.props.showUser(this.props.match.params.uid);
  }
  componentDidUpdate() {
    this.setState({fetched: true})
  }

  renderPosts() {
    // if(this.props.posts[0].userId != this.props.match.params.uid) {
    //   return <h1>Loading Posts...</h1>
    // }
    return this.props.posts.map(post => {
      return (
        <Link to={`/users/${this.props.match.params.uid}/posts/${post.id}`}>
        <Segment onMouseOver={this.handleMouseover.bind(this)} onMouseOut={this.handleMouseout.bind(this)}>
          {post.title}
        </Segment>
        </Link>
      )
    })
  }
  handleMouseover(event){
    event.target.className='ui segment inverted teal';
  }
  handleMouseout(event){
    event.target.className='ui segment';
  }


  renderPreview() {
    if(!this.props.match.params.pid) {
      return <h2>click to preview</h2>
    }
    for (var post in this.props.posts) {
      var postid = this.props.posts[post].id;
      if(postid == this.props.match.params.pid) {
        return (
          <div>
            <h2>{this.props.posts[post].title}</h2>
            <p>{this.props.posts[post].body}</p>
          </div>
        )
      }
    }
  }


  render() {
    if(!this.state.fetched) {
      return (
        <div>
          <Nav />
          <h1>Loading...</h1>
        </div>
      )
    }

    return (
      <div>
        <Nav />
        <Divider />
        <Link to={"/users/"+this.props.match.params.uid}>
          <Button>Back</Button>
        </Link>
        <h2>Posts of {this.props.user.name}</h2>
        <Grid>
          <Grid.Row columns="2">
            <Grid.Column>
              {this.renderPosts()}
            </Grid.Column>
            <Grid.Column>
              {this.renderPreview()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts, user: state.user }
}

export default connect(mapStateToProps, { fetchPosts, showUser })(Posts);
