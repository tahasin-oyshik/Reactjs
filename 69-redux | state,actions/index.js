// defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// state
const initialCounterState = {
  count: 0,
};
const initialUsersState = {
  users: [{ name: 'Tahasin' }],
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
const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: 'Jones' },
  };
};

// 1. state
// 2. dispatch action
// 3. reducer (works based on action type)
// 4. store
