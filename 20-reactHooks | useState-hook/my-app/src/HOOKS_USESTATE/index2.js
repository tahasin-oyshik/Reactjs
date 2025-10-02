// Example of using React Hooks (useState) with a Functional Component
// Same Thing Like index1 But more Advance Method (follow this method)
import { useState } from 'react';

const HOOKS_USESTATE2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default HOOKS_USESTATE2;
