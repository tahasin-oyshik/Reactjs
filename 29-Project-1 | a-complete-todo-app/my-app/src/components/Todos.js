import Todo from './Todo';
import style from './todos.module.css';

const Todos = ({ todos, onRemoveTodo }) => {
  return (
    <section className={style.todos}>
      {todos.map(({ id, todoData }) => (
        <Todo todo={todoData} key={id} id={id} onRemoveItem={onRemoveTodo} />
      ))}
    </section>
  );
};

export default Todos;
