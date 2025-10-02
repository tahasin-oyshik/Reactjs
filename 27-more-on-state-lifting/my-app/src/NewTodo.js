const NewTodo = (props) => {
  const newTodo = { title: 'I am a new todo' };
  props.onAddTodo(newTodo);

  return <div>New Todo Component</div>;
};

export default NewTodo;
