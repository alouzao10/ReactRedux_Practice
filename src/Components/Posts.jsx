import React, { Component } from 'react';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    console.log('Posts Will Mount');
    // When the Component loads go and fetch the data
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Do what you want with the JSON Data
        this.setState({ posts: data });
      });
  }
  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
