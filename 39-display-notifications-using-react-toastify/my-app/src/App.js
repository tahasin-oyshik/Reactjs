import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const handleAddNewTodo = () => {
    toast('new todo is added');
  };
  const handleDeleteTodo = () => {
    toast('todo is deleted');
  };

  return (
    <div>
      <h2>Todo App</h2>
      <button onClick={handleAddNewTodo}>Add New Todo</button>
      <button onClick={handleDeleteTodo}>Delete Todo</button>
      <ToastContainer />
    </div>
  );
};

export default App;

// // same thing but other method better
// const App = () => {
//   const handleAddNewTodo = () => {
//     alert('new todo is added');
//   };

//   return (
//     <div>
//       <h2>Todo App</h2>
//       <button onClick={handleAddNewTodo}>Add New Todo</button>
//     </div>
//   );
// };

// export default App;
