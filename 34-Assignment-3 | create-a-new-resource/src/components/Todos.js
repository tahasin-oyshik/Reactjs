import PropTypes from 'prop-types';

import Todo from './Todo';

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;
