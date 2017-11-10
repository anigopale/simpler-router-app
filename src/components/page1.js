import React, { Component } from 'react';
import { Segment, Container, Divider } from 'semantic-ui-react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import Nav from './nav';

class Page1 extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  componentDidUpdate() {
    console.log("component updated",this.props.posts);
  }

  renderTitles() {
    return this.props.posts.map(post => {
      return (
        <Segment onMouseOver={this.handleMouseover.bind(this)} onMouseOut={this.handleMouseout.bind(this)} >{post.title}</Segment>
      )
    })
  }
  handleMouseover(event) {
    event.target.className='ui segment inverted teal';
  }
  handleMouseout(event) {
    event.target.className='ui segment';
  }

  render() {
    console.log("inside page1",this.props);
    return (
      <div>
      <Nav currentpath={this.props.location.pathname} />
        this is page1
        <Divider hidden />
        <Container text>
          {this.renderTitles()}
        </Container>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {posts};
}

export default connect(mapStateToProps, { fetchPosts })(Page1);
