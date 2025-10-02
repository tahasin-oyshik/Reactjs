// const Welcome = () => {
//   return <h1>welcome</h1>;
// };

// const App = () => {
//   return (
//     <div>
//       <Welcome />
//     </div>
//   );
// };

// export default App;

import React from 'react';

const Welcome = () => {
  return <h1>welcome</h1>;
};
const Welcome1 = () => {
  return React.createElement('h1', {}, 'welcome');
};
const Todo = () => {
  return (
    <div>
      <p>Todo Title</p>
      <p>Todo Desc</p>
    </div>
  );
};
const Todo1 = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('p', {}, 'Todo Title'),
    React.createElement('p', {}, 'Todo Desc'),
  );
};

const App = () => {
  return (
    <div>
      <Welcome />
      <Welcome1 />
      <Todo1 />
    </div>
  );
};

export default App;
