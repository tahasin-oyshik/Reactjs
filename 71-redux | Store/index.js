const { createStore } = require('redux');

// defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// state
const initialCounterState = {
  count: 0,
};

// action ( action is a object & it has - type, payload )
// and incrementCounter or decrementCounter is action creater.
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// create reducer for counter (reducer is a pure function)
const counterReducer = (state = initialCounterState, action) => {
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
    default:
      state;
  }
};

// 1. state
// 2. dispatch action
// 3. reducer (works based on action type)
// 4. store (three type of methods in store - getState(), dispatch(), subscribe())

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
