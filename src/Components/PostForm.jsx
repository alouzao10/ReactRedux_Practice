import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../Actions/PostActions';

export class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
    };

    this.updatePost = this.updatePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updatePost(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      content: this.state.content,
    };

    /*fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));*/
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h3>Add New Post</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type='text'
              value={this.state.title}
              name='title'
              onChange={this.updatePost}
            />
          </div>
          <div>
            <label>Content</label>
            <br />
            <textarea
              value={this.state.content}
              name='content'
              onChange={this.updatePost}
            />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default connect(null, { createPost })(PostForm);
