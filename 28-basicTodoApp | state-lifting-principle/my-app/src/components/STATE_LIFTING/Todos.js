import Todo from './Todo';

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todoText, index) => (
        <Todo key={index} todo={todoText} />
      ))}
    </div>
  );
};

export default Todos;
