import './App.css';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className="App">
      <h1>fetch data in react-redux</h1>
      <Todos />
    </div>
  );
};

export default App;

// step1: install packages (npm install redux react-redux axios redux-thunk)
// step2: constants define
// step3: async action creator
// step4: reducer
// step5: create store
// step6: provide store
// step7: use store
// step8: adding css
