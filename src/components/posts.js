import React, { Component } from 'react';
import Nav from './nav';
import { Link, Route } from 'react-router-dom';
import { fetchPosts, showUser, fetchComments, clearComments } from '../actions';
import { connect } from 'react-redux';
import { Grid, Segment, Container, Divider, Button, Loader } from 'semantic-ui-react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { fetched: false, link: "", comments: false, updateclicked: false };
  }

  componentDidMount() {
    this.props.showUser(this.props.match.params.uid);
    this.props.fetchPosts(this.props.match.params.uid);
  }
  componentDidUpdate() {
    this.setState({ fetched: true });
  }

  renderPosts() {
    if(this.props.posts[0].userId != this.props.match.params.uid) {
      return <Loader active inline='centered'>Loading Posts</Loader>
    }
    return this.props.posts.map(post => {
      return (
        <Link to={`/users/${this.props.match.params.uid}/posts/${post.id}`} onClick={this.handlepostClick.bind(this)}>
        <Segment onMouseOver={this.handleMouseover.bind(this)} onMouseOut={this.handleMouseout.bind(this)}>
          {post.title}
        </Segment>
        </Link>
      )
    })
  }
  handlepostClick() {
    this.setState({updateclicked: false});
    this.props.clearComments();
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

  renderComments() {
    if(this.props.comments.length == 0 && this.state.updateclicked) {
      return <Loader active inline='centered'>loading comments</Loader>
    }

      return this.props.comments.map(comment => {
        return (
          <Segment>
            {comment.email}
            <Divider />
            <p>{comment.body}</p>
          </Segment>
        )
      })
  }

  renderBookmark() {
    return (
      <div>
        <h3>
          Click Bookmark button to get current url:- {this.state.link}
        </h3>
      </div>
    )
  }
  handleClick() {
    this.setState({ link: this.props.location.pathname });
  }

  handlefetchClick() {
    this.setState({ updateclicked: true });
    this.props.fetchComments(this.props.match.params.pid);
    this.setState({ comments: true });
  }
  handleclearClick() {
    this.props.clearComments();
    this.setState({ updateclicked: false })
  }

  render() {
    console.log(this.props.comments);
    if(!this.state.fetched) {
      return (
        <div>
          <Nav />
          <Divider />
          <Loader active inline='centered'>fetching user posts</Loader>
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
        <Button onClick={this.handleClick.bind(this)}>Bookmark</Button>
        {this.renderBookmark()}
        <h2>Posts of {this.props.user.name}</h2>
        <Grid>
          <Grid.Row columns="2">
            <Grid.Column>
              {this.renderPosts()}
            </Grid.Column>
            <Grid.Column>
              <h1>Selected Post</h1>
              <Segment color="teal" inverted>
                {this.renderPreview()}
              </Segment>
              <Button onClick={this.handlefetchClick.bind(this)}>Update Comments</Button>
              <Button onClick={this.handleclearClick.bind(this)}>Clear</Button>
              <h3>Comments</h3>
              <Divider />
              {this.renderComments()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts, user: state.user, comments: state.comments }
}

export default connect(mapStateToProps, { fetchPosts, showUser, fetchComments, clearComments })(Posts);
