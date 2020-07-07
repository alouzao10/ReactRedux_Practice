import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './Store/Store';

import Posts from './Components/Posts';
import PostForm from './Components/PostForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Basic Posting Page</h1>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
