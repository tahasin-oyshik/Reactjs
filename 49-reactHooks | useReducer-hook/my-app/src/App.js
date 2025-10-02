import UseReducer from './components/HOOKS/UseReducer/UseReducer';

const App = () => {
  return (
    <div>
      <UseReducer />
    </div>
  );
};

export default App;

// Quick flow 👍 :
// useReducer initializes state with INITIAL_STATE.
// User submits form → dispatch({ type: 'ADD' }).
// Reducer returns new state → React re-renders with new book + “book is added” modal.
// User clicks remove → dispatch({ type: 'REMOVE' }).
// Reducer returns new state → React re-renders with book removed + “book is removed” modal.
