// Install react-redux here - npm install @reduxjs/toolkit react-redux

import { legacy_createStore as createStore } from 'redux';
import counterReducer from './services/reducers/counterReducer';

const store = createStore(counterReducer);

export default store;
