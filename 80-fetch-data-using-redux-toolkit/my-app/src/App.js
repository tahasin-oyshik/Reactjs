import './App.css';
import CounterView from './features/counter/CounterView.js';

const App = () => {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterView />
    </div>
  );
};

export default App;

// First install redux toolkit - npm install @reduxjs/toolkit react-redux
// step1: createSlice then export action creator functions and reducer
// step2: create store, provide store in index.js
// step3: dispatch action creator function in counterView.js
