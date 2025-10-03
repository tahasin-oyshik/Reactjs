// state - count: 0
// action - increment, decrement, reset
// reducer
// store

import { legacy_createStore as createStore } from 'redux';

// CONSTANTS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const ADD_USER = 'ADD_USER';

const initialState = {
  count: 1,
  users: ['Jones'],
};

const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounterAction = () => {
  return {
    type: RESET,
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// CREATING REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case ADD_USER:
      return {
        count: state.count + 1,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(10));
store.dispatch(addUser('Tahasin'));
store.dispatch(addUser('DarkStar'));
