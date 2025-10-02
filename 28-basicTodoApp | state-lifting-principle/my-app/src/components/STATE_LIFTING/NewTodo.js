import { useState } from 'react';

const NewTodo = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">New Todo: </label>
      <input type="text" id="todo" name="todo" value={inputValue} onChange={handleInputChange} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
