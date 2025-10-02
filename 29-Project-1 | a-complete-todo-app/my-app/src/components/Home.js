import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTodo from './NewTodo';
import Todos from './Todos';
import style from './home.module.css';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoData) => {
    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuidv4(), todoData }];
    });
  };
  const removeTodo = (id) => {
    setTodos((previousTodos) => {
      const filteredTodos = previousTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>Todo App</h1>
      <NewTodo onAddTodo={addTodo} />
      <Todos todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
};

export default Home;
