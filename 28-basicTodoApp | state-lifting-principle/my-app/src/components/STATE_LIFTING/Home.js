import { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

const initialTodos = ['todo1', 'todo2'];

const Home = () => {
  const [todoList, setTodoList] = useState(initialTodos);

  const handleAddTodo = (newTodoText) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodoText]);
  };

  return (
    <div>
      <Todos todos={todoList} />
      <NewTodo onAddTodo={handleAddTodo} />
    </div>
  );
};

export default Home;
