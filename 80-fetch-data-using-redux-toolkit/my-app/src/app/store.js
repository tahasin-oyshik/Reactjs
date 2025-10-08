import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.js';
import postReducer from '../features/posts/postSlice.js';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});

export default store;
