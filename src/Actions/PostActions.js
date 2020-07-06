import { FETCH_POSTS, ADD_POST } from './Types';

export const function fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => {
        dispatch({
          type: FETCH_POSTS,
          payload: posts,
        });
      });
}
