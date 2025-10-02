import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1); // 0 + 1 = 1
    setCount((prevCount) => prevCount + 1); // 1 + 1 = 2
    setCount((prevCount) => prevCount + 1); // 2 + 1 = 3
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default App;
