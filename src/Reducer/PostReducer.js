import { FETCH_POSTS, ADD_POST } from '../Actions/Types';

const initialState = {
  posts: [],
  post: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}
