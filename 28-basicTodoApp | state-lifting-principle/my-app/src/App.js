// App.js --> components --> Home.js (todos = ["item1", "item2"]) --> Todos --> Todo
// components --> NewTodo

import Home from './components/STATE_LIFTING/Home';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
