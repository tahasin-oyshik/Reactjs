import NewTodo from './NewTodo';
import Todo from './Todo';

const App = () => {
  const addTodo = (newTodo) => {
    console.log(newTodo);
  };

  return (
    <div>
      <Todo title="learn react.js" />
      <NewTodo onAddTodo={addTodo} />
    </div>
  );
};

export default App;
