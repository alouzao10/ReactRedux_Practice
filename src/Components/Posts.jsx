import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from '../Actions/PostActions';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentWillReceiveProps(nextPost) {
    if (nextPost.newPost) {
      this.props.posts.unshift(nextPost.newPost);
    }
  }

  componentWillMount() {
    console.log('Posts Will Mount');
    // When the Component loads go and fetch the data
    this.props.fetchPosts();
    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Do what you want with the JSON Data
        this.setState({ posts: data });
      });
      */
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  newPost: state.posts.post,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
