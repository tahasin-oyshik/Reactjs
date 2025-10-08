import './App.css';
import CounterView from './features/counter/CounterView.js';
import PostsView from './features/posts/PostsView.js';

const App = () => {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterView />
      <PostsView />
    </div>
  );
};

export default App;
